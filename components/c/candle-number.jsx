import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mo7o1zgwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 2.75c1 1.1 1.5 1.8 1.5 2.5a1.5 1.5 0 0 1-3 0c0-.7.5-1.4 1.5-2.5m-4.34 8.96l2.68-1.92q.41-.29.91-.29h1.5q.5 0 .5.5v8.75q0 .5.5.5h1.25q.5 0 .5.5v1q0 .5-.5.5h-8q-.5 0-.5-.5v-1q0-.5.5-.5h1.75q.5 0 .5-.5v-5.5q0-.5-.42-.24l-1.16.73q-.42.26-.42-.24v-1q0-.5.41-.79");
}
</style><path class="mo7o1zgwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:candle-number"} {...others} />);
}

export default Component;
