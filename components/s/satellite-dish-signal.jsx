import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e3_j6jh9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7a8 8 0 0 0 11 11Zm5.5 5.5l2-2M6.25 17v4.5m-2.75 0H9m4-14a3 3 0 0 1 2.5 2.5m-2-5.25a5.75 5.75 0 0 1 4.75 4.75M14 2.25A8.5 8.5 0 0 1 20.75 9");
}
</style><path class="e3_j6jh9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:satellite-dish-signal"} {...others} />);
}

export default Component;
