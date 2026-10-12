import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yg-1i8a0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.75q-.9.9 0 1.8c.9.9.6 1.2 0 1.8m6-3.6q-.9.9 0 1.8c.9.9.6 1.2 0 1.8m-8 1.9h10m-13.5 3h17a8.5 6.5 0 0 1-17 0m4.75 5.65L6.5 21.25m9.25-4.35l1.75 4.35m-5.5-3.5v3.5");
}
</style><path class="yg-1i8a0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:barbecue-party"} {...others} />);
}

export default Component;
