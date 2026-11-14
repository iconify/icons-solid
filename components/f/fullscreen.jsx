import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-fs5wb7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.5V6A2.5 2.5 0 0 1 6 3.5h2.5m7 0H18A2.5 2.5 0 0 1 20.5 6v2.5m0 7V18a2.5 2.5 0 0 1-2.5 2.5h-2.5m-7 0H6A2.5 2.5 0 0 1 3.5 18v-2.5");
}
</style><path class="d-fs5wb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fullscreen"} {...others} />);
}

export default Component;
