import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ilwckc33e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14h3a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 8 19H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 14m0 0v-2.5h4m7 2.5h3a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 19h-3a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 16 14m0 0v-2.5h4M13 6h7.5m-2.25-2.25L20.5 6l-2.25 2.25");
}
</style><path class="ilwckc33e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:curling-takeout"} {...others} />);
}

export default Component;
