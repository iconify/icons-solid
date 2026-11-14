import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jn31ms4nk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 16a3 3 0 0 1 0-6a4.5 4.5 0 0 1 8 1a2.5 2.5 0 0 1 1 5Zm14-13.5A3.5 3.5 0 1 0 21 8a3 3 0 0 1-1.5-5.5M6 19.5h.01m3.99 1h.01m3.99-1h.01");
}
</style><path class="jn31ms4nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:moon-cloud-snow"} {...others} />);
}

export default Component;
