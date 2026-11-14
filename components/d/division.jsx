import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zw62_ot-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6V7H9Zm-6.5 10h7v6h-7ZM12 7v2.75m-6 0h11.75M6 9.75v2.75m11.75-2.75v2.75M14 15v-1.5a1 1 0 0 1 1-1h1m3.5 0h1a1 1 0 0 1 1 1V15m0 3v1.5a1 1 0 0 1-1 1h-1m-3.5 0h-1a1 1 0 0 1-1-1V18");
}
</style><path class="zw62_ot-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:division"} {...others} />);
}

export default Component;
