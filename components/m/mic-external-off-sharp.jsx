import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aky0_66jf {
  fill: currentColor;
  d: path("M9.5 6.65L5.35 2.5q.35-.275.775-.387T7 2q1.25 0 2.125.862T10 5q0 .45-.137.863T9.5 6.65M20 17.15l-2-2V4h-4v7.15l-2-2V2h8zM6 22v-4H5L4 8h1.15L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-6.5-6.5V22zm6-2v-5.2l-2.45-2.45L9 18H8v2z");
}
</style><path class="aky0_66jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mic-external-off-sharp"} {...others} />);
}

export default Component;
