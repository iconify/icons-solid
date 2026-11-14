import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hau1hxbnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6.5h5A3.5 3.5 0 0 1 18 10v8a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 18v-8a3.5 3.5 0 0 1 3.5-3.5m-.75-4h6.5A1.75 1.75 0 0 1 17 4.25v.5a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 7 4.75v-.5A1.75 1.75 0 0 1 8.75 2.5M9 11h6m-6 3.25h6M9 17.5h4");
}
</style><path class="hau1hxbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dosage-instructions"} {...others} />);
}

export default Component;
