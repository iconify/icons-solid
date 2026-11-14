import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ife2wobub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5V9a2 2 0 0 1 2-2h15M18 4.5L20.5 7L18 9.5m2.5 2V15a2 2 0 0 1-2 2h-15M6 14.5L3.5 17L6 19.5");
}
</style><path class="ife2wobub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:reshare-arrows"} {...others} />);
}

export default Component;
