import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y9lr9vmbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.939 8.111l4.95 4.95l-7.778 7.778l-4.95-4.95Zm4.95-2.121l2.121 2.121l-3.535 3.535l-2.121-2.121Zm3.861-3.508l1.768 1.768l-1.768 1.768l-1.768-1.768ZM12 3.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm8 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="y9lr9vmbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:champagne-bottle"} {...others} />);
}

export default Component;
