/* function DNA to RNA(dna) {
  let dnaArr = dna.split('');
  let RNAregex = /t/i;
  for (let i = 0; i < dna.length; i++) {
    if (RNAregex.test(dnaArr[i])) {
      dnaArr[i] = 'U';
    }
  }
}

*/

// Refactored code

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}