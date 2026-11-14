import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qrlwo-57w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19h19m-17 0v2.5m15-2.5v2.5M4 19V9h3v10m0 0V6h3v13m0 0v-8h2.75v8m1.5 0L18 8l2.75 1L17 19");
}
</style><path class="qrlwo-57w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:library-room"} {...others} />);
}

export default Component;
