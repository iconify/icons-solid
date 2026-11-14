import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iw7fnb0dp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 9h6.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 12.75 15h-6.5a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 6.25 9M2 12h2.5m3-3v6m9.121-5.121a3 3 0 0 1 0 4.242m2.284-5.817a5.75 5.75 0 0 1 0 7.392");
}
</style><path class="iw7fnb0dp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:proximity-sensor"} {...others} />);
}

export default Component;
