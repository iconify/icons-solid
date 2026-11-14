import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fwhwt3blv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 10H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 7m1.5 3v7m13-7v7m-13-3h13");
}
</style><path class="fwhwt3blv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bench-backless"} {...others} />);
}

export default Component;
