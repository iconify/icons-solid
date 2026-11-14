import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.schoo-78q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21 5H7a3.5 3.5 0 0 0-3.5 3.5v7A3.5 3.5 0 0 0 7 19h14ZM9 5v14m3-9.25h9m-9 4.5h9M6.25 12h.01");
}
</style><path class="schoo-78q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:perfect-binding"} {...others} />);
}

export default Component;
