import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wa2-4s1dy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 2.75c1 1.3 2 2.3 2 3.4a2 2 0 0 1-4 0c0-1.1 1-2.1 2-3.4m-5 8.75h10a5 4.75 0 0 1-10 0m10 0h3.5l5-4.25");
}
</style><path class="wa2-4s1dy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:syrup-bottle"} {...others} />);
}

export default Component;
