let arr=[];
for(let i=0;i<=9;i++){
    arr[i]=i+2
}
console.log(arr)


for(let i=1;i<=100;i++){
 if(i%15==0){console.log("Fizz-buzz")}
  
    else if(i%3==0){console.log("Fizz")}
    
    else if(i%5==0){console.log("Buzz")}

    else{console.log(i)}
}
