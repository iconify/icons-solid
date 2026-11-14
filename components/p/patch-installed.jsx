import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ajdpypb_x {
  d: path("m4.404 9.354l4.95-4.95a3 3 0 0 1 4.242 0a3 3 0 0 1 0 4.242l-4.95 4.95a3 3 0 0 1-4.242 0a3 3 0 0 1 0-4.242");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rgbb44bvj {
  d: path("m6.525 7.939l1.414-1.414a1.5 1.5 0 0 1 2.122 0l1.414 1.414a1.5 1.5 0 0 1 0 2.122l-1.414 1.414a1.5 1.5 0 0 1-2.122 0l-1.414-1.414a1.5 1.5 0 0 1 0-2.122M14.75 18l2 2L21 15.75");
}
</style><g class="hntgybcog"><path class="ajdpypb_x"/><path class="rgbb44bvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:patch-installed"} {...others} />);
}

export default Component;
