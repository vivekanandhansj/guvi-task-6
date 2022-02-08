//Fix the code to get the largest of three.
const aa = (f,s,t) => {//missing const rediclared fst
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else {
    console.log(t)}
   }
   aa(1,2,3);


//Fix the code to Sum of the digits present in the number
let n = 123;

function add(n)
{
let summ = 10;
for(var i=0;i<n.length;i++){
 summ+=n[i]
 }
 return summ;
}
console.log(add(n));


//Fix the code to Sum of all numbers using IIFE function
(function() {
    let arr = [9,8,5,6,4,3,2,1]
 let sum11 = 0;
 for (var i = 0; i < arr.length; i++){
 sum11 =sum11 + arr[i];
 }
 console.log(sum11);
 return sum11
})()


//Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num/2;i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return num!==0;
});
console.log(myPrime);


//Fix the code to sum the number in that array
const numm = [10, 20, 30, 40,50,60,70,80,90,100] 
const summ1 = numm.reduce((a, b) =>{
 return a + b
 
})
console.log(summ1);


//print all odd numbers in an array using IIFE function
var arr14 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr14.length; i++) {
 if (arr14[i] % 2 !== 0) {
 console.log(arr14[i]);
 }}
})();


//Fix the code to reverse.
(function(str){
  var  str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")


//Fix the code to remove duplicates.
let newArr15 = [];
var res11 = function(arr){
    for(var i=0; i < arr.length; i++){
    
    if(newArr15.indexOf(arr[i]) == -1) {
    newArr15.push(arr[i]);
    } }
    console.log(newArr15)
   }
   res11(["guvi","geek","guvi","duplicate","geeK"])





//Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var oddNumbers = as.filter(function(item) {
   return (item % 2 !== 0);
})
var total00 = oddNumbers.reduce(function(tot, curr) {
    return tot + curr})

console.log(total00);
  

//Fix the code to gen Title caps.
var arr004 = ["guvi", "geek", "zen", "fullstack"];
var ano=function(arro) {
 for (var i = 0; i < arro.length; i++) {
 arro[i] = arro[i].charAt(0).toUpperCase() + arro[i].slice(1);
 return arro.join(' ')

 }
}
console.log(ano(arr004));


//Fix the code to gen Title caps.
var arr005 = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr005.length; i++) {
 console.log(arr005[i][0].toUpperCase() + arr005[i].substr(1))
 }
})();


// //Swap the odd and even digits
aaa =(data)=>{
    var a=data;
    var l='';
   for(i=0;i<a.length;i++){
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aaa("1234");

//Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr12 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr12.length % k;
(function() {
 out = arr12.slice(k + 1, arr12.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr12[i];
 count += 1;
 }
 console.log(out);
})();


//Fix the code to give the below output:
//Expected Output:

[
   {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
   {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
]


var arrayy =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],
[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
 var final0=[]
 
while(arrayy.length!==0)
{
 var outer_remove = arrayy.shift();
var new_object={}
 while(outer_remove.length !==0)
 {

 var inner_remove = outer_remove.shift()
 var keyy = inner_remove[0]
 var valuee =inner_remove[1]
 new_object[keyy]=valuee
 }
final0.push(new_object)
}
console.log(final0)