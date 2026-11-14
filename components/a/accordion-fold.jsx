import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c96eklbxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8l4.5-4.5L12 8l4.5-4.5L21 8v12.5L16.5 16L12 20.5L7.5 16L3 20.5Zm4.5-4.5V16M12 8v12.5m4.5-17V16");
}
</style><path class="c96eklbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:accordion-fold"} {...others} />);
}

export default Component;
