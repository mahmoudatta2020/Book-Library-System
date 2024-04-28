document.getElementById('bookCountForm').addEventListener('submit', function (e) 
{
    e.preventDefault(); // Prevent form submission

    var bookCount = document.getElementById('bookCount').value; 

    // Remove existing form elements
    var container = document.querySelector('.container');
    container.innerHTML = '';

    // Create book input form dynamically
    var bookForm = document.createElement('form');
    bookForm.id = 'bookForm';

    for (var i = 0; i < bookCount; i++) {
        var bookDiv = document.createElement('div');
        bookDiv.className = 'form-group';

        var nameLabel = document.createElement('label');
        nameLabel.textContent = 'Book Name:';
        var nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.className = 'form-control';
        nameInput.required = true;

        var priceLabel = document.createElement('label');
        priceLabel.textContent = 'Price:';
        var priceInput = document.createElement('input');
        priceInput.type = 'number';
        priceInput.className = 'form-control';
        priceInput.required = true;

        var authorLabel = document.createElement('label');
        authorLabel.textContent = 'Author:';
        var authorInput = document.createElement('input');
        authorInput.type = 'text';
        authorInput.className = 'form-control';
        authorInput.required = true;

        bookDiv.appendChild(nameLabel);
        bookDiv.appendChild(nameInput);
        bookDiv.appendChild(priceLabel);
        bookDiv.appendChild(priceInput);
        bookDiv.appendChild(authorLabel);
        bookDiv.appendChild(authorInput);

        bookForm.appendChild(bookDiv);
    }

    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'btn btn-primary';
    submitButton.textContent = 'Submit';

    bookForm.appendChild(submitButton);
    container.appendChild(bookForm);

    bookForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var books = [];

        // Collect book information
        var bookInputs = document.querySelectorAll('#bookForm .form-group');
        for (var i = 0; i < bookInputs.length; i++) {
            var book = {};
            book.name = bookInputs[i].querySelector('input[type="text"]').value;
            book.price = bookInputs[i].querySelector('input[type="number"]').value;
            book.author = bookInputs[i].querySelector('input[type="text"]').value;
            books.push(book);
        }

        // Display books in a table
        var table = document.createElement('table');
        table.className = 'table';
        var thead = document.createElement('thead');
        var tbody = document.createElement('tbody');

        var headerRow = document.createElement('tr');
        var headers = ['Book Name', 'Price', 'Author'];

        for (var i = 0; i < headers.length; i++) {
            var th = document.createElement('th');
            th.textContent = headers[i];
            headerRow.appendChild(th);
        }

        thead.appendChild(headerRow);

        for (var i = 0; i < books.length; i++) {
            var bookRow = document.createElement('tr');
            var bookData = [books[i].name, books[i].price, books[i].author];

            for (var j = 0; j < bookData.length; j++) {
                var td = document.createElement('td');
                td.textContent = bookData[j];
                bookRow.appendChild(td);
            }

            tbody.appendChild(bookRow);
        }

        table.appendChild(thead);
        table.appendChild(tbody);
        container.appendChild(table);
    });
});
