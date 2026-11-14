import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x5j413c_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5H7v3L5.5 9h-3Zm7.25 0h4.5v3L12.75 9h-3Zm7.25 0h4.5v3L20 9h-3Zm-11 8h4.5v3L9 17H6Zm7.5 0H18v3L16.5 17h-3Zm-11 8h19");
}
</style><path class="x5j413c_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:business-model"} {...others} />);
}

export default Component;
