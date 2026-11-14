import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o8_478o_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 8.5h2.25A2.625 2.625 0 0 1 12 11.125v7.75A2.625 2.625 0 0 1 9.375 21.5h-2.25A2.625 2.625 0 0 1 4.5 18.875v-7.75A2.625 2.625 0 0 1 7.125 8.5M6 8.5V5h4.5L12 6.5v2M14.75 4L19 2.5m-4 4.25h5M14.75 9.5L19 11");
}
</style><path class="o8_478o_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bear-spray"} {...others} />);
}

export default Component;
