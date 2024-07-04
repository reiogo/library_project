const myLibrary = [];

function Book(title, author, pages, readOrNot) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readOrNot = readOrNot;
}

function addBookToLibrary(title, author, pages, readOrNot) {
  `book_${myLibrary.indexOf(-1) + 1}`= Book(title, author, pages, readOrNot)
   
}

