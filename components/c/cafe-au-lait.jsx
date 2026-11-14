import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eiikpek5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7h14v5a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5Zm0 1.5A2.25 2.25 0 0 0 5 13m14-4.5a2.25 2.25 0 0 1 0 4.5M8 10h8");
}
</style><path class="eiikpek5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cafe-au-lait"} {...others} />);
}

export default Component;
