import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xue39vb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5h2A1.5 1.5 0 0 1 14.5 4A1.5 1.5 0 0 1 13 5.5h-2A1.5 1.5 0 0 1 9.5 4A1.5 1.5 0 0 1 11 2.5m-1 3V8c0 1.5-3 2-3 4.5V20a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 17 20v-7.5c0-2.5-3-3-3-4.5V5.5M7 14h10M7 18h10");
}
</style><path class="xue39vb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:juice-bottle"} {...others} />);
}

export default Component;
