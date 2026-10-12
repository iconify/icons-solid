import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ff92yi4id {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 16v-5.5a1.25 1.25 0 0 1 2.5 0V14h1.75a2.5 2.5 0 0 1 2.5 2.5v.5A4.25 4.25 0 0 1 16 21.25h-.75a3.75 3.75 0 0 1-3.75-3.75V17a1 1 0 0 1 1-1Zm2.5-1.5v2.25m-9.5 2.5V3.5M4 6l2.5-2.5L9 6");
}
</style><path class="ff92yi4id"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:swipe-up"} {...others} />);
}

export default Component;
