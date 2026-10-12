import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r-pwyqd9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v7m-2.75 0h5.5a1 1 0 0 1 1 .9l.25 2.6l2.15 6.65a1 1 0 0 1-.95 1.35H6.8a1 1 0 0 1-.95-1.35L8 13.25l.25-2.6a1 1 0 0 1 1-.9M8 13.25h8m-5.5 8v-4m3 4v-4");
}
</style><path class="r-pwyqd9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:broom"} {...others} />);
}

export default Component;
