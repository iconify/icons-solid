import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hztpr87kh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5a2 2 0 0 1 4 0v8.75a3.75 3.75 0 1 1-4 0Zm2 3.5v8M13.5 9q1.75-2 3.75 0T21 9m-7.5 5.5q1.75-2 3.75 0t3.75 0");
}
</style><path class="hztpr87kh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:water-temperature"} {...others} />);
}

export default Component;
