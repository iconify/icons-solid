import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a66bldbiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5h11.5M10 12h11.5M10 19h11.5M3.25 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M2.5 8c0-1.25 1-1.75 2.25-1.75S7 6.75 7 8m-3.75 3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-.75 4c0-1.25 1-1.75 2.25-1.75S7 13.75 7 15m-3.75 3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-.75 4c0-1.25 1-1.75 2.25-1.75S7 20.75 7 22");
}
</style><path class="a66bldbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:patient-list"} {...others} />);
}

export default Component;
