const personName = "Edy Segura";
console.log(`Hello ${personName}, welcome to JS!`);

const numberA = 11;
const numberB = 31;

const total = numberA + numberB;
console.log("The total is: " + total);

console.log("The numberA variable is: ", typeof numberA);

// prettier-ignore
const nameList = [
  'Grimmjow',
  'Luffy',
  'Goku',
  'Saitama'
]

function print(text) {
  console.log(text);
}

function fancyPrint(text) {
  console.log(`---> 💀 ${text} 💀<---`);
}

const printerImplementation = fancyPrint;

const toUpper = (text) => text.toUpperCase();

// prettier-ignore
nameList
  .sort()
  .reverse()
  .map(toUpper)
  .forEach(printerImplementation);
