import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i220bm5ki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21h10.4m-8.4 0v-7m4 7V9.5m4 11.5V4m3 11h6v1.5a1 1 0 0 0 0 2V20h-6v-1.5a1 1 0 0 0 0-2Z");
}
</style><path class="i220bm5ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:box-office-chart"} {...others} />);
}

export default Component;
