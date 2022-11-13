/*
Pen Tasting,0
System Engineer,1
Malicious Code,2
*/ 

const qnaList = [
  {
    q: '당신은 화이트 해커와 같은 일을 하고 싶은가요?',
    a: [
      { answer: '네', type: [0] },
      { answer: '아니요', type: [1, 2] },
    ]
  },
  {
    q: '무언가를 설계하는 것을 좋아하나요?',
    a: [
      { answer: '좋아한다.', type: [1] },
      { answer: '별로 좋아하지 않는다.', type: [0, 2] },
    ]
  },
  {
    q: '만약 당신이 어떠한 취약점을 발견한다면 어떻게 하고 싶나요?',
    a: [
      { answer: '직접 실습을 통해 보안시스템을 설계하고 싶다.', type: [0,] },
      { answer: '툴을 이용해 로그확인해 분석해보고 싶다.', type: [2] },
      { answer: '둘다 이용해보고 싶다', type: [1] },
    ]
  },
  {
    q: '당신은 사람과 대화하는 것에 대해 어떻게 생각하나요?',
    a: [
      { answer: '재미있어 계속 대화하고 싶다.', type: [1] },
      { answer: '조금 그 자리를 피하고 싶다.', type: [0, 2] },
    ]
  },
  {
    q: '문제가 발생하면 그 무언가를 찾고 분석하는 것을 좋아하나요??',
    a: [
      { answer: '선호한다.', type: [2] },
      { answer: '내키지 않는다.', type: [0, 1]},
    ]
  },
]

const infoList = [
  {
    name: '"모의해킹 전문가(Penetration Tasting)"',
    desc: ''
  },
  {
    name: '"보안 컨설턴트(System Engineer)"',
    desc: ''
  },
  {
    name: '"악성코드 분석가(Malicious Code)"',
    desc: ''
  },
]
