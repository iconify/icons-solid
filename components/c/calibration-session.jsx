import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jfchdwb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v18m8-18v18m8-18v18M3.25 12a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m8 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0m8 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0M2 12h2m3.25 0h1.5m6.5 0h1.5M20 12h2");
}
</style><path class="jfchdwb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:calibration-session"} {...others} />);
}

export default Component;
