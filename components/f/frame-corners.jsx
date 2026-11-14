import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c24u48ihv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5V5a2 2 0 0 1 2-2h3.5m7 0H19a2 2 0 0 1 2 2v3.5m0 7V19a2 2 0 0 1-2 2h-3.5m-7 0H5a2 2 0 0 1-2-2v-3.5");
}
</style><path class="c24u48ihv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:frame-corners"} {...others} />);
}

export default Component;
