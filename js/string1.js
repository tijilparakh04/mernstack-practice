var s1 = "Pune"
var s2 = 'Pune is awful'

// var s3 = """Pune is awful"""
// var s4 = '''Pune is awful'''
// invalid strings

var s5 = `Pune is awful` //used for interpolation

console.log(s1)
s1 = s1 + " is"
console.log(s1)
s1 = s1 + " awful"
console.log(s1)

//will create three objects, stored seperately in heap, with new references from variable s1 stored in stack everytime
//because strings are immutable
