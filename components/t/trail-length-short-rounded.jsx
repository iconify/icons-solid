import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lvs8c8rcn {
  fill: currentColor;
  d: path("M15 16.5q-1.748 0-3.005-1.137T10.523 12.5H5q-.213 0-.356-.144t-.144-.357t.144-.356T5 11.5h5.523q.087-.806.51-1.623q.425-.818 1.217-1.377H7q-.213 0-.356-.144T6.5 7.999t.144-.356T7 7.5h8q1.868 0 3.184 1.316Q19.5 10.13 19.5 11.997t-1.316 3.185T15 16.5m-7 0q-.213 0-.356-.144t-.144-.357t.144-.356T8 15.5h1q.213 0 .356.144t.144.357t-.144.356T9 16.5z");
}
</style><path class="lvs8c8rcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:trail-length-short-rounded"} {...others} />);
}

export default Component;
