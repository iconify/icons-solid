import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pffqf3bly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14.75a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 0h.01M10.25 12l8.25-8.25M17 2.5l3.25 3.25M2.5 21.5h19m-6.5 0v-3m3 3V18");
}
</style><path class="pffqf3bly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lawn-edger"} {...others} />);
}

export default Component;
