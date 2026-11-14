import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oc9ayubfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m5-9.75v2m0 15.5v2M2.25 12h2m15.5 0h2M6.5 6.5L5 5m12.5 1.5L19 5M6.5 17.5L5 19m12.5-1.5L19 19");
}
</style><path class="oc9ayubfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sun-medium"} {...others} />);
}

export default Component;
