const somesum = (n: number, k: number): number => {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i**k;
    }
    return s;
} 

const ssumer = (n: number): number => (.5*n*(n+1))**2

let n = 100_000_000;
let k = 3;

console.log('somesum = ' + somesum(n,k) + '\n ssumer = ' + ssumer(n))

//[LOG]: "somesum = 2.5000000500004043e+31
// ssumer = 2.5000000500000004e+31"