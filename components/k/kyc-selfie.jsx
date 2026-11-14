import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pkxpp9z4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 9a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4.5 20.5c.5-4 3.5-6 7.5-6s7 2 7.5 6M2.5 6V3.5H5");
}
</style><path class="pkxpp9z4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kyc-selfie"} {...others} />);
}

export default Component;
