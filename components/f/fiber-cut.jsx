import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nw3d5acuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4H4.75a2.75 2.75 0 0 0 0 5.5H9M6.5 6.75h4M15 4h4.25a2.75 2.75 0 0 1 0 5.5H15m2.5-2.75h-4m3 13.5a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0m5.25 0a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-5.5-1l4-5.5m-1 5.5l-4-5.5");
}
</style><path class="nw3d5acuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fiber-cut"} {...others} />);
}

export default Component;
