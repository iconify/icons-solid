import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h2xds--pf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.125 8h1.75a2.625 2.625 0 0 1 2.625 2.625v2.75A2.625 2.625 0 0 1 12.875 16h-1.75A2.625 2.625 0 0 1 8.5 13.375v-2.75A2.625 2.625 0 0 1 11.125 8M2.5 12h6M6 9.5L8.5 12L6 14.5M21.5 12h-6M18 9.5L15.5 12l2.5 2.5");
}
</style><path class="h2xds--pf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:balanced-forces"} {...others} />);
}

export default Component;
