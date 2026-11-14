import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yi36qcc3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5H16V15H2.5ZM4 17.75l-1.5 1.5l1.5 1.5m-1.5-1.5H16m-1.5-1.5l1.5 1.5l-1.5 1.5M18.75 5l1.5-1.5l1.5 1.5m-1.5-1.5V15m-1.5-1.5l1.5 1.5l1.5-1.5");
}
</style><path class="yi36qcc3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:area-rectangle"} {...others} />);
}

export default Component;
