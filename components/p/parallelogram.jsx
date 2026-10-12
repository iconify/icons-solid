import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y01nmccvj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.75h9.5q2 0 1.29 1.87l-4.08 10.76Q16 19.25 14 19.25H4.5q-2 0-1.29-1.87L7.29 6.62Q8 4.75 10 4.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="y01nmccvj"/><path class="to8m3ibcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:parallelogram"} {...others} />);
}

export default Component;
