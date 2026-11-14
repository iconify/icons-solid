import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dljq91bvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.303 3.868l2.829 2.829l-4.596 4.596l-2.829-2.829Zm-6.01 3.182l5.657 5.657m-3.889-3.889l2.121 2.121l-5.657 5.657L5.99 18.01l1.414-3.535Z");
}
</style><path class="dljq91bvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:eyedropper"} {...others} />);
}

export default Component;
