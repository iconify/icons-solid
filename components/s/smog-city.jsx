import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffu5qhxvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21h19m-18 0v-7h5V9.75h6v2.75h6V21M4 3.5q2-1.25 4 0t4 0t4 0t4 0M4 6.25q2-1.25 4 0t4 0t4 0t4 0");
}
</style><path class="ffu5qhxvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:smog-city"} {...others} />);
}

export default Component;
