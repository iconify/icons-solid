import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqcxktb2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a2.75 2.75 0 1 0 5.5 0A2.75 2.75 0 1 0 2 12m7.75-2.75h5v5.5h-5Zm9.5-.25l2.5 5.75h-5ZM3 19h18");
}
</style><path class="iqcxktb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:count-distinct"} {...others} />);
}

export default Component;
