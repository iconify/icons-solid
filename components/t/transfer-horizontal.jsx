import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lc9fp83zd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6 0h11m-3.5-3.5L20 7l-3.5 3.5M17 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2 0H4m3.5-3.5L4 17l3.5 3.5");
}
</style><path class="lc9fp83zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:transfer-horizontal"} {...others} />);
}

export default Component;
