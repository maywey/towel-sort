
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = []
  if (!matrix) return []
  for (let i=0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j=0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j])
      } 
    }else {
      for (let k = matrix[i].length - 1; k >=0; k--) {
        arr.push(matrix[i][k])
      }
    }
  }
  return arr
}
