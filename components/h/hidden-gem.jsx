import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xnyk4ncda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.764 4h8.472a1.5 1.5 0 0 1 1.213.618l2.885 3.967a1.5 1.5 0 0 1-.032 1.806l-7.121 9.1a1.5 1.5 0 0 1-2.362 0l-7.121-9.1a1.5 1.5 0 0 1-.032-1.806l2.885-3.967A1.5 1.5 0 0 1 7.764 4M3 9.5h18m-11.5 0L12 21m2.5-11.5L12 21");
}
</style><path class="xnyk4ncda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hidden-gem"} {...others} />);
}

export default Component;
