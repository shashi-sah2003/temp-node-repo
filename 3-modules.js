//console.log(__dirname)

// setInterval(() =>{
//     console.log("Hello World")
// },1000)

//Modules - Encapsulated code (only share minimum)
// const john = 'john'
// const peter = 'peter'

const names = require('./4-names')
const sayHi = require('./5-utils')
console.log(sayHi)
console.log(names)
const data = require('./6-alternative')
// console.log(data)
// const sayHi = (name) => {
//     console.log(`Hello world ${name}`);
// }

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)