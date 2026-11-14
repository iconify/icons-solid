import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lcbvvybnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16c0-3 2-3 3.5-1.5h12c1.5-1.5 3.5-1.5 3.5 1.5v2.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2ZM8 11.5q-1-2 0-4t0-4m4 8q-1-2 0-4t0-4m4 8q-1-2 0-4t0-4");
}
</style><path class="lcbvvybnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:heated-pet-bed"} {...others} />);
}

export default Component;
