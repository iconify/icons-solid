import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yc47eq77s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5c0-2.9 2.75-5 6.5-5h5c3.75 0 6.5 2.1 6.5 5Zm6.75-16a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-6 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m12 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="yc47eq77s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:team"} {...others} />);
}

export default Component;
