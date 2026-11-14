import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o1t6m-b3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 14.5V5a2.5 2.5 0 0 1 5 0v9.5a4 4 0 1 1-5 0m12 .5v6.5m-2.75-4.75l5.5 3m-5.5 0l5.5-3");
}
</style><path class="o1t6m-b3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:absolute-zero"} {...others} />);
}

export default Component;
