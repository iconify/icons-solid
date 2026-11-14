import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v5p_pvb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3L4 6.5L2.5 13L6 14l1-3v10h10V11l1 3l3.5-1L20 6.5L15.5 3L12 9ZM7 14h10m-4 0l1.25 3.5");
}
</style><path class="v5p_pvb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bathrobe"} {...others} />);
}

export default Component;
