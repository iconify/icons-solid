import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ubq1ns3gt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19M5.75 4h11.5A1.75 1.75 0 0 1 19 5.75a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 5.75A1.75 1.75 0 0 1 5.75 4m0 6.25h7.5A1.75 1.75 0 0 1 15 12a1.75 1.75 0 0 1-1.75 1.75h-7.5A1.75 1.75 0 0 1 4 12a1.75 1.75 0 0 1 1.75-1.75m0 6.25h3.5A1.75 1.75 0 0 1 11 18.25A1.75 1.75 0 0 1 9.25 20h-3.5A1.75 1.75 0 0 1 4 18.25a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="ubq1ns3gt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:timing-tower"} {...others} />);
}

export default Component;
