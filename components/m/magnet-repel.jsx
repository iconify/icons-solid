import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i4hlm4w6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.75H5a5.5 5.5 0 0 1 0 11H2.5v-3H5a2.5 2.5 0 0 0 0-5H2.5Zm2.5 0v3m0 5v3m16.5-11H19a5.5 5.5 0 0 0 0 11h2.5v-3H19a2.5 2.5 0 0 1 0-5h2.5Zm-2.5 0v3m0 5v3M9.5 4.5h-6M5 3L3.5 4.5L5 6m9.5-1.5h6M19 3l1.5 1.5L19 6");
}
</style><path class="i4hlm4w6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:magnet-repel"} {...others} />);
}

export default Component;
