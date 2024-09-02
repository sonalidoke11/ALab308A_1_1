
// Part 1: Stack Overflow

let counter_variable;

function increaseByFive(counter_variable){
    try {
        counter_variable += 5
        increaseByFive(counter_variable)
    } catch (error) {
        console.log(counter_variable)
        console.error(error)
    }
}
increaseByFive(10);


//Part 2: Trampolines

// const factorial = (n) => {
    
//     if (n === 0) return 1; // The base case, to stop recursion
//     let number =  n * factorial(n - 1); // The recursive call
//     console.log(number);
//     return n * factorial(n - 1);
// }
// factorial(5)



// const facto = (n, a = 1) => {
//     if (n === 0) return a;
//     console.log(facto(n - 1, n * a));
//     return () => facto(n - 1, n * a);
// }
// facto(5)

// const trampoline = (f, ...args) => {
//     let result = f(...args);
//     while (typeof result === "function") {
//       result = result();
//     }
//     return result;
// }
// console.log(trampoline(facto(10000)))



function isPrime(n) 
{ 
	if (n <= 1) return false; 
	if (n <= 3) return true; 
	
	if (n%2 == 0 || n%3 == 0) return false; 
	
	for (let i=5; i*i<=n; i=i+6) 
		if (n%i == 0 || n%(i+2) == 0) 
		return false; 
	
	return true; 
} 

// function listOfPrimes(n) {
//     let primeCntent = document.getElementById("primeListDisplay")
//     primeCntent.innerHTML="";
//     console.log(primeCntent);

    
//     let array = [];
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             array.push(i)
//             
//         }
//     }
//      primeCntent.innerHTML = array ;
//     alert("Prime numbers displayed successfully!!")
// }

// listOfPrimes(89)
// //listOfPrimes(10000)

function listOfPrimes(n) {
    let primeCntent = document.getElementById("primeListDisplay")
    primeCntent.innerHTML="";

    //let array = [];
    const list = document.createElement('ul');
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            //array.push(i)
            const listItem = document.createElement('li');
            listItem.textContent = i;
            list.appendChild(listItem);
            primeCntent.appendChild(list);
        }
        //primeCntent.appendChild(list);
    }
    alert("Prime numbers displayed successfully!!")
}

listOfPrimes(89)
//listOfPrimes(10000)