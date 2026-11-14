import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t884gsbgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5C7 9.5 11 7 14 7l1-3.5h5.5q1 0 1 1v3h-4l-.5 2c-1 1-1.5 2-1.5 3.5l-.5 2.5c-1 1-4 1-6 0c-2-.5-4.5-.5-6.5-1m10 1.5v4.5m-3.5-5l-.5 5m7-9l2.75 1.75");
}
</style><path class="t884gsbgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:allosaurus"} {...others} />);
}

export default Component;
