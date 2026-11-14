import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y1_c-jbgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V5m0 12v4.5M12 5za3.25 3.25 0 0 1 3.25 3.25v5.5A3.25 3.25 0 0 1 12 17a3.25 3.25 0 0 1-3.25-3.25v-5.5A3.25 3.25 0 0 1 12 5M8.75 8h6.5m-6.5 6.25l6.5-3.25");
}
</style><path class="y1_c-jbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flag-rolled"} {...others} />);
}

export default Component;
