import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rol_m-bdh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v4.5h-19ZM5 8.5v4m14-4v4M5 15.75v2.75a2 2 0 0 0 2 2h1.75M19 15.75v2.75a2 2 0 0 1-2 2h-1.75m-3.75 0h1");
}
</style><path class="rol_m-bdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:atm-out-of-cash"} {...others} />);
}

export default Component;
