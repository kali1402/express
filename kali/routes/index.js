var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 로그인 페이지 접근
router.get('/login', function(req, res, next) {
  console.log(req.session);
    res.render('login', { title: '로그인' });
});

// 영화 페이지
router.get('/god', function(req, res, next) {
  if(req.session.ID && req.session.PW) {
    const params = {
      ID: req.session.ID,
      PW: req.session.PW
    };
    res.render('god', params);
  } else {
    res.render('login', { title: '로그인' });
  }
})
// 로그인 확인 페이지 접근
router.post('/login', function(req, res, next){

  const params = {
    ID: req.body.id,
    PW: req.body.pw
  };

  req.session.ID = params.ID;
  req.session.PW = params.PW;
  console.log(req.session);

  res.render('login2', params);
})

//로그아웃
router.get('/logout', function(req, res, next) {
  res.render('logout');
  req.session.destroy();
})
module.exports = router;
