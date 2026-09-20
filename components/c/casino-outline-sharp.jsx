import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bm6c5lbie {
  fill: currentColor;
  d: path("M8.736 16.582Q9 16.317 9 15.923t-.264-.659t-.66-.264t-.659.265q-.264.264-.264.658t.264.659t.659.264t.659-.264m0-7.847Q9 8.471 9 8.077t-.264-.659t-.659-.264t-.659.264t-.264.659t.264.659t.659.264t.659-.264m3.923 3.923q.264-.265.264-.659t-.264-.659q-.265-.264-.659-.264t-.659.264q-.264.265-.264.659t.264.659q.265.264.659.264t.659-.264m3.923 3.923q.264-.265.264-.659t-.264-.659t-.659-.264t-.659.265t-.264.658t.265.659t.658.264t.659-.264m0-7.847q.264-.264.264-.658t-.264-.659t-.659-.264t-.659.264t-.264.659t.265.659t.658.264t.659-.264M4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="bm6c5lbie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:casino-outline-sharp"} {...others} />);
}

export default Component;
