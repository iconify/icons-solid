import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.df4qvmy-l {
  d: path("m13.05 20.17l6.9-7.09Q21 12 19.5 12h-2Q16 12 16 10.5V4.25q0-1.5-1.5-1.5h-5Q8 2.75 8 4.25v6.25Q8 12 6.5 12h-2q-1.5 0-.45 1.08l6.9 7.09q1.05 1.08 2.1 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2a82ccry {
  d: path("M9.75 8.5L12 10.75l2.25-2.25");
}
</style><g class="hntgybcog"><path class="df4qvmy-l"/><path class="z2a82ccry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:downvote"} {...others} />);
}

export default Component;
