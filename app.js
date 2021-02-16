////conecting math module
const math = { div, mul, add, sub } = require("./math")

console.log(math)



let temp = require("./temperateures.json")

console.log(temp.__proto__)

temp.forEach(
  options => console.log("--> ",options)
)
console.log("clear null")
////clear null
let arr = temp.filter(function (el) {
  return el != null;
});
console.log(arr) 
console.log(" clear all with out number and push in new arrey (data)")
////// clear all with out number and push in new arrey (data)
let data = []
arr.forEach(function (el) {
  let num = parseFloat(el.value)
  if (isNaN(num)) {
    if (typeof (el) === "number") {
      data.push(el)
      console.log(el)
  }
}
}
);
console.log(data)
console.log("calculating the average")
let summ = 0
for (let i = 0; i < data.length; i++) {
  summ += data[i]
}


let mean = math[3](summ,data.length)
console.log(mean)