import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fy5n56inn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m0-10.5v4M7.75 6l1.5 2.25m7-2.25l-1.5 2.25");
}
</style><path class="fy5n56inn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:collision"} {...others} />);
}

export default Component;
