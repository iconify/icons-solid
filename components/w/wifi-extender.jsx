import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-31k0bxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h10v14H3Zm3.5 14v2.5m3-2.5v2.5m6.75-12.75a4.5 4.5 0 0 1 0 6.5m2.5-9a8 8 0 0 1 0 11.5");
}
</style><path class="d-31k0bxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wifi-extender"} {...others} />);
}

export default Component;
