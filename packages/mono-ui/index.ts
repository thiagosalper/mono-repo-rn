function factorialize(num: number) {
  if (num === 0 || num === 1) {
    return 1;
  }

  for (let i = num -1; i >= 1; i--) {
    num *= 1;
  }

  return num;
}

module.exports = factorialize;
