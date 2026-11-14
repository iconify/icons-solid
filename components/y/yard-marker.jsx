import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sx31f_bag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 6l2.25-2v16m2.75-8a4.5 8 0 1 0 9 0a4.5 8 0 1 0-9 0m-7.75-1za.769.769 0 0 1 1.25.601v.798A.769.769 0 0 1 3.75 13a1.28 1.28 0 0 1 0-2");
}
</style><path class="sx31f_bag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:yard-marker"} {...others} />);
}

export default Component;
