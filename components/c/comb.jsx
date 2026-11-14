import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u-r7f7z5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.652 7.757l11.591-3.105a2 2 0 0 1 2.449 1.414a2 2 0 0 1-1.414 2.449L5.687 11.621a2 2 0 0 1-2.45-1.414a2 2 0 0 1 1.415-2.45m1.035 3.864l2.07 7.727m.828-8.503l2.07 7.727m.827-8.504l2.071 7.728m.827-8.504l2.071 7.727m.827-8.504l2.07 7.728");
}
</style><path class="u-r7f7z5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:comb"} {...others} />);
}

export default Component;
