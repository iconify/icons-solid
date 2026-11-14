import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xrx5ukb1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.026 4.658l4.5-1.5a1.5 1.5 0 0 1 .948 0l5.052 1.684a1.5 1.5 0 0 0 .948 0l3.552-1.184A1.5 1.5 0 0 1 21 5.081v12.838a1.5 1.5 0 0 1-1.026 1.423l-4.5 1.5a1.5 1.5 0 0 1-.948 0l-5.052-1.684a1.5 1.5 0 0 0-.948 0l-3.552 1.184A1.5 1.5 0 0 1 3 18.919V6.081a1.5 1.5 0 0 1 1.026-1.423M9 3v16m6-14v16");
}
</style><path class="xrx5ukb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:piste-map"} {...others} />);
}

export default Component;
