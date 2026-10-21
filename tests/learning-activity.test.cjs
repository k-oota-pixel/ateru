const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
test('a zero-score round records learning once without awarding a coin',()=>{
 const source=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');const fn=source.split(/\r?\n/).find(line=>line.startsWith('function showResult(){'));
 let learned=0,coins=0;const element=()=>({classList:{add(){},remove(){}},replaceChildren(){},append(){},focus(){},style:{}});
 vm.runInNewContext(fn+';showResult();showResult();',{history:[],review:[],roundRecorded:false,$:element,document:{createElement:element},start(){},window:{EnglishPlayroomCoins:{recordLearningActivity:()=>learned++,awardAteru:()=>coins++}}});assert.equal(learned,1);assert.equal(coins,0);
});
