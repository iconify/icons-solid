import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d14t-mbkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 7.5L3 11v9.5h10.26M16 11.84V11l3.5-3M3 11h13M6.5 4.5a3 1.5 0 1 0 6 0a3 1.5 0 1 0-6 0m0 0V11m6-6.5V11M18 21.5l-3-3.25a2 2 0 1 1 3-2.5a2 2 0 1 1 3 2.5Z");
}
</style><path class="d14t-mbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:food-bank-box"} {...others} />);
}

export default Component;
