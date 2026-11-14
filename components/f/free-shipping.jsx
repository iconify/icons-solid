import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ruyzbjbhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 4.5h6.25A2.625 2.625 0 0 1 14 7.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-6.25A2.625 2.625 0 0 1 2.5 12.875v-5.75A2.625 2.625 0 0 1 5.125 4.5M14 8.5h4l3.5 3.5v3.5H14m-9 3a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-9.5-6L10.5 8m-4.25.25h.01m3.99 4h.01");
}
</style><path class="ruyzbjbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:free-shipping"} {...others} />);
}

export default Component;
