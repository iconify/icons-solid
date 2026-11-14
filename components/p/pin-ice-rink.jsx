import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rkog-t1lg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.5H11v7l5.5 1.5a3 3 0 0 1 2.5 3v2H5.5Zm-2 17H18a2.5 2.5 0 0 0 2.5-2.5m-13-1v3.5M16 17v3.5");
}
</style><path class="rkog-t1lg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-ice-rink"} {...others} />);
}

export default Component;
