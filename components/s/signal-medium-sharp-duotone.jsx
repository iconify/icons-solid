import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.lj14h_baz {
  fill: currentColor;
  d: path("M1 19L3 19L3 21L1 21L1 19Z");
  stroke: none;
}

.m1z-ndv6m {
  d: path("M12 21L12 11M7 21L7 15");
}

.mxuiqbdgj {
  stroke-opacity: 0.4;
  d: path("M22 21L22 3M17 21L17 7");
}
</style><g class="gp_8x1bzb"><path class="m1z-ndv6m"/><path class="mxuiqbdgj"/><path class="lj14h_baz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:signal-medium-sharp-duotone"} {...others} />);
}

export default Component;
