import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zow67f90j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.5h3A3.5 3.5 0 0 1 17 6v10a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 7 16V6a3.5 3.5 0 0 1 3.5-3.5m-.75 17v2m4.5-2v2M9.75 5.75h4.5M9.75 9v7m4.5-7h.01");
}
</style><path class="zow67f90j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gaming-pc"} {...others} />);
}

export default Component;
