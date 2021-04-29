class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace((/[^a-zA-Z-'\s]+/g),"")
  }

  static titleize(str) {
    const avoid = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const titleized = str.split(" ").map(function(word) {
      if (!avoid.includes(word) || word === str.split(" ")[0]) {
        return Formatter.capitalize(word)
      } else {
        return word
      }
    })
    return titleized.join(" ")
  }
}
