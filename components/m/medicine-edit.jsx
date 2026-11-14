import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t8dxypbur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h10V6h-10ZM11.9 21H4V6h13v7.1M10.5 11v5M8 13.5h5m1.75 7.75l.5-2.5l4.5-4.5A1.25 1.25 0 0 1 21.5 16L17 20.5Z");
}
</style><path class="t8dxypbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:medicine-edit"} {...others} />);
}

export default Component;
