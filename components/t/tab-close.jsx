import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rdl4wenkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20H5V6.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2V20h2.5M9.25 9.5l5.5 5.5m0-5.5L9.25 15");
}
</style><path class="rdl4wenkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tab-close"} {...others} />);
}

export default Component;
