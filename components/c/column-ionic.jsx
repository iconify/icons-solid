import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.znn1cy1xi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8.5A2.5 2.5 0 1 1 8 6h8a2.5 2.5 0 1 1 2.5 2.5M8 6v11.5M16 6v11.5m-11.5 0h15v3h-15Z");
}
</style><path class="znn1cy1xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:column-ionic"} {...others} />);
}

export default Component;
