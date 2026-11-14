import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yduj-1bfj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8h5a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 11 20H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 8m13.25-4za2.25 2.25 0 0 1 2.25 2.25v11.5A2.25 2.25 0 0 1 19.25 20A2.25 2.25 0 0 1 17 17.75V6.25A2.25 2.25 0 0 1 19.25 4M2.5 11.5h12");
}
</style><path class="yduj-1bfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:food-storage-box"} {...others} />);
}

export default Component;
