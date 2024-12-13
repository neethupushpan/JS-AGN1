let number=prompt("Enter a number between 0 and 1 million")
let min=0
let max=1e6
if(number<max && number>min){
    console.log("Valid Number")
    let sum=0
    let i=0
   do{
      sum+=i
      i++

}while(i<=number)
    console.log(sum)
}

else{
    console.log("InValid Number")

  
}