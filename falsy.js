Comparisons of falsy values with ==
console.log("The number 0")
console.log(0==0) // true
console.log(0==0n) // true
console.log(0==null) // false
console.log(0==undefined) // false
console.log(0==false) // true
console.log(0==NaN) // false
console.log(0=="") // true

console.log("The BigInt 0n")
console.log(0n==0n) // true
console.log(0n==null) // false
console.log(0n==undefined) // false
console.log(0n==false) // true
console.log(0n==NaN) // false
console.log(0n=="") // true

console.log("The value null")
console.log(null==null) // true
console.log(null==undefined) // true
console.log(null==false) // false
console.log(null==NaN) // false
console.log(null=="") // false

console.log("The value undefined")
console.log(undefined==undefined) // true
console.log(undefined==false) // false
console.log(undefined==NaN) // false
console.log(undefined=="") // false

console.log("The boolean false")
console.log(false==false) // true
console.log(false==NaN) // false
console.log(false=="") // true

console.log("The number NaN")
console.log(NaN==NaN) // false
console.log(NaN=="") // false

console.log(`The empty string ""`)
console.log(""=="") // true
