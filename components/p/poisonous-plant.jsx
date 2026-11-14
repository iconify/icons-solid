import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q8b4-5z2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21.5V10m0 4c-3.5 0-6-2.5-6-6c3.5 0 6 2.5 6 6m0-4c0-3.5 2.5-6.5 6.5-6.5c0 4-2.5 6.5-6.5 6.5m6.5 5.5l5 5m0-5l-5 5");
}
</style><path class="q8b4-5z2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:poisonous-plant"} {...others} />);
}

export default Component;
