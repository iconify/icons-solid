import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.on8311biz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.521 19.5H2.5L11 3l5.101 9.903M7.5 9.75l1.75 1.75L11 9.75l1.75 1.75l1.75-1.75M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="on8311biz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:airport-elevation"} {...others} />);
}

export default Component;
