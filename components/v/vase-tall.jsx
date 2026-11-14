import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k5s-a5wmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4V6c0 2 3.5 4.5 3.5 9c0 3.5-2 6-5.5 6s-5.5-2.5-5.5-6c0-4.5 3.5-7 3.5-9ZM6.75 14.5h10.5");
}
</style><path class="k5s-a5wmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:vase-tall"} {...others} />);
}

export default Component;
