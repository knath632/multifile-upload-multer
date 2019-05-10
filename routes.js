var multer = require('multer')

var storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/productimages/')
  },
  filename: function (req, file, cb) {
    let split = file.mimetype.split("/");
    let timeStamp = Date.now();
    console.log('files => ', file);

    cb(null, `${file.fieldname}_${timeStamp}.${split[1]}`)
  }
})

...
...
...
...

admin.post('/addproduct', multer({ storage: storage1 }).array('files', 20), function (req, res) {
  res.send(req.files);

});
