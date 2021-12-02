/////1st
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

/////2nd
let planetFacts = {
    numPlanetss: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanetss, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // {yearNeptuneDiscovered: 1846,  yearMarsDiscovered: 1659}


/////3rd  
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
  getUserData({}) // Your name is undefined and you like green

  /////4th
  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); //  Marisa
console.log(third); // Chi

/////5th
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // Raindrops on roses
  console.log(whiskers); // whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles",  
                                          //"warm woolen mittens",  
                                          //"Brown paper packages tied up with strings"]

/////6th
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

/////7th
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
let {numbers: {a, b}} = obj;

/////8th
var arr = [1,2];
[arr[0],arr[1]] = [arr[1],arr[0]];

/////9th
let raceResults = ([first, second, third, ...rest]) => {return {first, second, third, rest};};
console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));