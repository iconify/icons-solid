import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_37u1r3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l8 3V11c0 5-3.5 8.5-8 10.5c-4.5-2-8-5.5-8-10.5V5.5Zm3 6l-6 7M8.75 9h.01m6.49 6h.01");
}
</style><path class="h_37u1r3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coverage-badge"} {...others} />);
}

export default Component;
