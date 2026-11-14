import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t2kv-0buk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.5q1 6.5 7.5 7.5q-6.5 1-7.5 7.5Q9 14 2.5 13Q9 12 10 5.5M18.5 3q.35 2.15 2.5 2.5q-2.15.35-2.5 2.5q-.35-2.15-2.5-2.5q2.15-.35 2.5-2.5");
}
</style><path class="t2kv-0buk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:build-clean"} {...others} />);
}

export default Component;
