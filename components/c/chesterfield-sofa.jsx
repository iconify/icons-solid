import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w_tkor14o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.5V9a2.5 2.5 0 0 1 5 0V4.5h9V9a2.5 2.5 0 0 1 5 0v9.5Zm5-9.5v9.5m9-9.5v9.5m-9-5.5h9m-12 5.5v2m15-2v2");
}
</style><path class="w_tkor14o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chesterfield-sofa"} {...others} />);
}

export default Component;
