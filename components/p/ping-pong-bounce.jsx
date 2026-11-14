import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lvy_g6bxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.25 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM3 5q5.5 2 7 13.5q1.5-7.5 3-8.5M2.5 18.5h19");
}
</style><path class="lvy_g6bxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ping-pong-bounce"} {...others} />);
}

export default Component;
