import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bc7uhfbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5h19m-15 0L3 20m9-11.5V20m5.5-11.5L21 20M6.5 8.5q0-3.5 3-4q0 3-3 4m5.5 0q0-3.5 3-4q0 3-3 4m5.5 0q0-3.5 3-4q0 3-3 4");
}
</style><path class="bc7uhfbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:crop-field"} {...others} />);
}

export default Component;
