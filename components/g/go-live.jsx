import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b3od13b8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8.465 7.787a5.5 5.5 0 0 1 7.07 0M5.894 4.723a9.5 9.5 0 0 1 12.212 0m-2.571 11.49a5.5 5.5 0 0 1-7.07 0m9.641 3.064a9.5 9.5 0 0 1-12.212 0");
}
</style><path class="b3od13b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:go-live"} {...others} />);
}

export default Component;
