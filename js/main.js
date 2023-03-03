//-------------------zigzag----------------

let a = [1,3,5,7,9];;
let b = [2,4,6,8,10]
let c = [];
let d = 0;
let e = 1;

for(i=0;i<a.length;i++){
	c[d++]=a[i];
	d++;
}
for(j=0;j<b.length;j++){
	c[e++]=b[j];
	++e;
}
console.log(c);