let meats = ["Chicken", "Beef", "Lamb", "Fish", "Snake", "Venison"];
let vegetables = ["Broccoli", "Lettuce", "Carrots", "Asparagus"];
let desserts = ["apple pie", "chocolate cake", "baklava", "cupcakes", "helva"];

meats.pop();
vegetables.pop();

let pie = "apple pie";

let mondayMenu = meats.concat(vegetables, pie);

console.log(mondayMenu);