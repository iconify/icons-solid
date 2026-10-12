import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ivv83s7ha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.5 12.25l-7-8.5m-4.75 5.5q1.75 3 6.25 3h6q4.5 0 6.25-3q-.75 9.5-4.25 9.5H7q-3.5 0-4.25-9.5M6.5 15.5h11");
}
</style><path class="ivv83s7ha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lifeboat"} {...others} />);
}

export default Component;
