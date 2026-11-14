import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hh-c5_bmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.749 17.274c-2.104.97-4.617 1.476-7.499 1.476c0-9.5 5.5-15 15-15c0 3.322-.672 6.155-1.953 8.434M3.75 20.25l1.5-1.5m0 0l8.25-8.25M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="hh-c5_bmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:leaf-arrow"} {...others} />);
}

export default Component;
