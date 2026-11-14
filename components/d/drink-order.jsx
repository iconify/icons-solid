import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uk4oohm0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5h8A1.5 1.5 0 0 1 14 6a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 3 6a1.5 1.5 0 0 1 1.5-1.5m-.5 3h9l-1 13H5Zm5.5-3l2-2.5M18 15v6m-3-3h6");
}
</style><path class="uk4oohm0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:drink-order"} {...others} />);
}

export default Component;
