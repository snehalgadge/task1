import v1 from "./v1.mp4";
import v2 from "./v2.mp4";
import v3 from "./v3.mp4";
import v4 from "./v4.mp4";
import v5 from "./v5.mp4";
import v6 from "./v6.mp4";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.jpg";

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-black ">
      <h1 className="text-center text-3xl font-bold pt-10 pb-10  text-white hover:text-gray-400">
        Our Work
      </h1>
      <div className="flex justify-center gap-8 flex-wrap mb-5">
        <video
          className="h-[400px] w-[250px] border-3 rounded object-cover border-2 border-gray-100"
          src={v1}
          autoPlay
          muted
          loop
        />
        <video
          className="h-[400px] w-[250px] border-3 rounded object-cover border-2 border-gray-100"
          src={v2}
          autoPlay
          muted
          loop
        />
        <video
          className="h-[400px] w-[250px]  border-3 rounded object-cover border-2 border-gray-100"
          src={v3}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        <video
          className="h-[400px] w-[250px] border-3 rounded object-cover border-2 border-gray-100"
          src={v4}
          autoPlay
          muted
          loop
        />
        <video
          className="h-[400px] w-[250px]  border-3 rounded object-cover border-2 border-gray-100"
          src={v5}
          autoPlay
          muted
          loop
        />
        <video
          className="h-[400px] w-[250px] border-3 rounded object-cover border-2 border-gray-100"
          src={v6}
          autoPlay
          muted
          loop
        />
      </div>
      <h1 className="text-white text-center pt-20 text-3xl text-bold">Our Work Gallery</h1>
      <div className="grid grid-cols-3 gap-4 h-[100%] w-[100%] p-11">
        <img src={img1} alt="img1" className="h-[100%] w-[100%] border-2 border-gray-100 object-cover rounded-md" />
        <img src={img2} alt="img2" className="h-[100%] w-[100%] border-2 border-gray-100 object-cover rounded-md" />
        <img src={img3} alt="img3" className="h-[100%] w-[100%] border-2 border-gray-100 object-cover rounded-md" />
        <img src={img4} alt="img4" className="h-[100%] w-[100%] border-2 border-gray-100 object-cover rounded-md" />
        <img src={img5} alt="img5" className="h-[100%] w-[100%] border-2 border-gray-100 object-cover rounded-md" />
        <img src={img6} alt="img6" className="h-[100%] w-[100%] border-2 border-gray-100 object-cover rounded-md" />
        <img src={img7} alt="img7" className="h-[85%] w-[100%] border-2 border-gray-100 object-cover rounded-md" />
        <img src={img8} alt="img8" className="h-[85%] w-[100%] border-2 border-gray-100 object-cover rounded-md" />
        <img src={img9} alt="img9" className="h-[85%] w-[100%] border-2 border-gray-100 object-cover rounded-md" />
      </div>
    </div>
  )
};

export default WorkPage;
