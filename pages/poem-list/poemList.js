

Page({
    data: {
        tabelData:[
            {
                avatar:"https://www.baidu.com/img/bd_logo1.png?where=super",
                content:"这是一段测试内容这是一段测试内容这是一段测试内容这是一段测试内容这是一段测试内容"
            },
            {
                avatar:"https://www.baidu.com/img/bd_logo1.png?where=super",
                content:"这是一段测试内容这是一段测试内容这是一段测试内容这是一段测试内容这是一段测试内容"
            }
        ]
    },
    jumpToDetail(){
    console.log('跳转到详情')

    wx.switchTab({
        url: '/pages/poemDetail/detail'
      })
    }
    
  })
  