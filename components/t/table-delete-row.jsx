import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nk5p8zc0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h9A3.5 3.5 0 0 1 20 6.5V9a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 9V6.5A3.5 3.5 0 0 1 7.5 3M4 7.75h16M9 18.5h6");
}
</style><path class="nk5p8zc0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:table-delete-row"} {...others} />);
}

export default Component;
