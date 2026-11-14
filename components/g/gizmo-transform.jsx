import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n9kq6nbtz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 13V3.5M7.5 6L10 3.5L12.5 6M10 13h10.5M18 10.5l2.5 2.5l-2.5 2.5M10 13l-6 6m0-3.5V19h3.5");
}
</style><path class="n9kq6nbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gizmo-transform"} {...others} />);
}

export default Component;
