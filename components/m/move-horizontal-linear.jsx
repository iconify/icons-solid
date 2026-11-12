import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ok3gm7bho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.99948 7.85828L1.85785 11.9999L5.99947 16.1415M1.85785 11.9999L22.1421 12M18.0005 16.1416L22.1421 12L18.0005 7.85836");
}
</style><path class="ok3gm7bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-horizontal-linear"} {...others} />);
}

export default Component;
