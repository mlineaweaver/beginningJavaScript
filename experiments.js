const monthlyRent = 500;

const yearlyRent = monthlyRent*12;
console.log(yearlyRent);

const myName = 'Melissa Lineaweaver';
console.log(myName);

const firstName = "Melissa";
const lastName = "Lineaweaver";

const templateSentence = `Hello ${firstName} ${lastName}! How are you?`

console.log(templateSentence);

const timesToRepeat = 10;
const character = 'baby';
let answer = '';

for (let i = 0; i<timesToRepeat; i++){
    answer = answer + character;
}

console.log(answer);