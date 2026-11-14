import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gimb-jbmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11h7a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 12 16H5a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 5 11m7.5 0l8-8M5 16v3m3.5-3v3m3.5-3v3");
}
</style><path class="gimb-jbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:scrub-brush"} {...others} />);
}

export default Component;
