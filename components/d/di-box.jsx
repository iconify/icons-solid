import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hmk-2mg7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.125 7h3.75A2.625 2.625 0 0 1 16.5 9.625v4.75A2.625 2.625 0 0 1 13.875 17h-3.75A2.625 2.625 0 0 1 7.5 14.375v-4.75A2.625 2.625 0 0 1 10.125 7M2.5 10h5m-5 4h5m9-2h5");
}
</style><path class="hmk-2mg7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:di-box"} {...others} />);
}

export default Component;
