import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d5cwpb0ad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.408 18.404l4.216-9.728a1.5 1.5 0 0 1 2.752 0l4.216 9.728a1.5 1.5 0 0 1-1.377 2.096h-8.43a1.5 1.5 0 0 1-1.377-2.096M9 5.5v-3m0 0L21 16m0 0v4.5M9 14v6.5");
}
</style><path class="d5cwpb0ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:guy-line"} {...others} />);
}

export default Component;
