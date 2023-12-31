const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  try{
    await fs.writeFile(fileName, fileContent, 'utf-8');
  }
  catch(err){
    console.log(err.message);
    throw err;
  }
};

module.exports = { writeFile };
