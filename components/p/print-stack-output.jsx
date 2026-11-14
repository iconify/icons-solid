import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xl6q9pb6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.611 4h11.131a1.75 1.75 0 0 1 1.584 2.495l-2.353 5a1.75 1.75 0 0 1-1.584 1.005H5.258a1.75 1.75 0 0 1-1.584-2.495l2.353-5A1.75 1.75 0 0 1 7.611 4M2.5 15.5h15m-15 3h15m-15 3h19M9 6.75h8m-9 3h5.5");
}
</style><path class="xl6q9pb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:print-stack-output"} {...others} />);
}

export default Component;
