import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

function Description() {
    const [mockData, setMockData] = useState({
        content: '<div>ㅎㅇ요</div><br/> <div>❤❤</div>'
    })

    return(
        <div>
            <div>설명</div>
            {ReactHtmlParser(mockData.content)}
        </div>
    )
}

function TreatmentInfo() {
    const [mockData, setMockData] = useState([
        {
            name: '애즈펌',
            price: 60000,
        },
        {
            name: '남성컷',
            price: 17000,
        },
        {
            name: '볼륨펌',
            price: 39000
        }
    ])

    return(
        <ul>
            {mockData.map((data, i) => (
                <li>
                    <div>{data.name}</div>
                    <div>{data.price}원</div>
                </li>
            ))}
        </ul>
    )
}

function MainImage({ img_url }) {
    return(
        <img src={img_url} width='200' height='300'/>
    )
}

function SubImage({ img_url }) {
    return(
        <img src={img_url} width='200' height='300'/>
    )
}

function ImageSlider() {
    const [img, setImg] = useState([
        {
            id: 0,
            img_url: 'https://i.picsum.photos/id/682/200/300.jpg?hmac=z-Zlq9KVG3pNsE5Jo6A7vqnh-B910bdMztU5AZKQV-o',            
        },
        {
            id: 1,
            img_url: 'https://i.picsum.photos/id/101/200/300.jpg?hmac=xUDvORQTxaML0fp9wnx4y6LIHvc7M-tNcOJz8rDLRXo',   
        },
        {
            id: 2,
            img_url: 'https://i.picsum.photos/id/696/200/300.jpg?hmac=Ukxvga_1GYxgfAqzwDhBPfVta6-hJKUhayVlI1yMIdk',   
        }
    ])

    const [imgNumber, setImgNumber] = useState(0);

    const onClickLeft = (e) => {
        e.preventDefault();

        if(imgNumber === 0) {
            setImgNumber(img.length - 1);
        } else {
            setImgNumber(prev => prev - 1);
        }
        console.log(imgNumber);
    }

    const onClickRight = (e) => {
        e.preventDefault();

        if(imgNumber + 1 === img.length) {
            setImgNumber(0);
        } else {
            setImgNumber(prev => prev + 1);
        }
        console.log(imgNumber);
    }

    return(
        <div>
            <div className='px-40 pt-20 pb-12 text-2xl text-yellow-400'>
                Desingers List
            </div>
            {img.map((image) => {
                if(image.id === imgNumber) {
                    return <MainImage img_url={image.img_url}/>
                }
            })}
            <hr></hr>
            {img.map((image, i) => <SubImage key={i} img_url={image.img_url}/>)}
            <button onClick={onClickLeft}>left</button>
            <button onClick={onClickRight}>right</button>
        </div>
    )
}

function DesignerInfo({ designer_name, address, designer_store, like_count }) {
    const [mockData, setMockData] = useState({
        designer_name: '이해석',
        like_count: 76,
        address: '서울시 성북구 길음로',
        designer_store: '엘리헤어'
    })
    
    return(
        <div>
            <img></img>
            <div>{mockData.designer_name}</div>
            <div>{mockData.like_count}</div>
            <div>{mockData.address}</div>
            <div>{mockData.designer_store}</div>
            <button>예약하기</button>
        </div>
    )
}
function SearchVar({}){
    return(
        <fieldset className='w-full bg-gray-900'>
            <div className='text-white flex justify-center text-3xl pt-20'>솔직한 리뷰, 믿을 수 있는 평점!</div>
            <div className='text-white flex justify-center text-3xl py-2'>Designer Us</div>
            <label className='flex justify-center pt-14 pb-6'>
                <div className='flex justify-between w-6/12 rounded-2xl bg-white'>
                    <input className='pl-4 w-2/3 rounded-2xl h-12 mr-24' type='text' placeholder='지역, ○○동'/>
                    <button className='rounded-2xl text-white bg-yellow-500 w-1/6 md:w-32 lg:w-48 text-2xl' type='submit' value='검색'>검색</button>
                </div>    
            </label>        
        </fieldset>
    )
}
function ImageCard() {
    return(
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img src='https://source.unsplash.com/random' alt='' className='px-6 py-4'/>
            <div>
                <ul>
                    <li>디자이너 : 이해석</li>
                    <li>주소 : 제주시 제주로 제주상가 1층</li>
                    <li>좋아요 : 500</li>
                </ul>
            </div>
        </div>
    )
}


function ViewDesigner() {
    return(
        <React.Fragment>
            <SearchVar></SearchVar>
            <hr></hr>
            <ImageCard></ImageCard>
            <hr></hr>
            <ImageSlider></ImageSlider>
            <hr></hr>
            <DesignerInfo></DesignerInfo>
            <hr></hr>
            <TreatmentInfo></TreatmentInfo>
            <hr></hr>
            <Description></Description>
        </React.Fragment>
    )
}

export default ViewDesigner;