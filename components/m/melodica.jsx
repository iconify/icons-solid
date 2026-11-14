import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ws6n6-b4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 7h8a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 18 14h-8a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 10 7M6.5 9.5c-2.5 0-4 1.5-4 4V17m7-6v3m3-3v3m3-3v3m3-3v3");
}
</style><path class="ws6n6-b4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:melodica"} {...others} />);
}

export default Component;
