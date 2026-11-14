import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cnc_6qb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9H10v4.5H7L6 19H3l.75-5.5H2.5Zm19-5.5v17M14 8.25l4.75-2m-4.25 5h4.25m-4.75 3l4.75 2");
}
</style><path class="cnc_6qb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pressure-washing"} {...others} />);
}

export default Component;
