import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmxs8stzi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11h16v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Zm-1.5 0H4m16 0h1.5M7 11c0-3 2-4.5 5-4.5S17 8 17 11");
}
</style><path class="fmxs8stzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:casserole-dish"} {...others} />);
}

export default Component;
