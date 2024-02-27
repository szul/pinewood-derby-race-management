const LANES = 3;
const ROUNDS = 2;

const generator = (cars, inc1, inc2) => {
    let heats = [];
    let shift = false;
    for(let r = 0; r < ROUNDS; r++) {
        for(i = 1; i <= cars.length; i++) {
            const lane1 = i
            let lane2 = lane1 + inc1;
            if(lane2 > cars.length) {
                lane2 = lane2 - cars.length
            }
            let lane3 = lane2 + inc2;
            if(lane3 > cars.length) {
                lane3 = lane3 - cars.length;
            }
            if(!shift) {
                heats.push([cars[lane1 - 1], cars[lane2 - 1], cars[lane3 - 1]]);
            }
            else {
                heats.unshift([cars[lane1 - 1], cars[lane2 - 1], cars[lane3 - 1]]);
            }
        }
        cars.reverse();
        shift = true;
    }
    return heats;
};

const isPerfect = (heats) => {
    const cars = heats.length;
    let perfect = true;
    for(let i = 1; i <= cars; i++) {
        const oppo = heats.filter((e) => e.indexOf(i) != -1);
        const unique = new Set(oppo.flat());
        const result = [...unique].length;
        if(result != cars) {
            perfect = false;
            break;
        }
    }
    return perfect;
};

const cars = [1, 2, 3, 4, 5, 6, 7, 8];

const heats = generator(cars, 1, 2);
const perfect = isPerfect(heats);

console.log(heats);
console.log(perfect);
