import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-fbjp52d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3za4 4 0 0 1 4 4v.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4M3 21.5v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3m-1.25-5.75L21 4.5M5 7.25h8");
}
</style><path class="d-fbjp52d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:kendoka"} {...others} />);
}

export default Component;
