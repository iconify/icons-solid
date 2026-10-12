import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gbmeoe71m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8.5a4.75 4.75 0 0 1 9.5 0c0 2-1.5 3.5-3.5 3.5c2.75 0 4.75 1.75 4.75 4.25s-2 4.25-4.75 4.25c-2.25 0-4.25-1.25-6-3m0-9V21");
}
</style><path class="gbmeoe71m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:beta-sign"} {...others} />);
}

export default Component;
