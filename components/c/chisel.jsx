import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4sziac-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.01 2.454l3.536 3.536l-5.657 5.656l-3.535-3.535Zm-7.601 6.541l4.596 4.596l-8.132 8.132l-4.596-4.596Zm3.712.884l-1.414 1.414m3.536-7.071l3.535 3.535M8.464 10.939l4.597 4.597");
}
</style><path class="d4sziac-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chisel"} {...others} />);
}

export default Component;
