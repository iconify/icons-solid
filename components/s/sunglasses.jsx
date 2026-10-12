import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ce-my_pjy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 9.75h5.5a1 1 0 0 1 1 1v1.75a3.75 3.75 0 0 1-7.5 0v-1.75a1 1 0 0 1 1-1m11 0h5.5a1 1 0 0 1 1 1v1.75a3.75 3.75 0 0 1-7.5 0v-1.75a1 1 0 0 1 1-1M10.25 11c1-.75 2.5-.75 3.5 0M3 9.75l2-4m16 4l-2-4m-13.75 7.5L7 11.5m9.25 1.75L18 11.5");
}
</style><path class="ce-my_pjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sunglasses"} {...others} />);
}

export default Component;
