import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lfrp6f61b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 6.574V5.5c0-1 .5-2 1.5-2s1.5 1 1.5 2v4.088m.944.952L20.5 14v2l-.794-.227M13.5 17.445V18l1.497.898M16 19.93v.57l-4-1l-4 1v-1l2.5-1.5v-3.568m-.354-.331L3.5 16v-2l4.157-2.376M4 4l16 16");
}
</style><path class="lfrp6f61b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flight-cancelled"} {...others} />);
}

export default Component;
