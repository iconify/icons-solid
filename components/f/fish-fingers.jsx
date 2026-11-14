import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rydli66-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.371 6.379l3.668-.78l3.119 14.673l-3.668.779Zm6.358-1.351l3.668-.78l3.119 14.672l-3.668.78Zm6.358-1.352l3.668-.779l3.119 14.672l-3.668.78Z");
}
</style><path class="rydli66-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fish-fingers"} {...others} />);
}

export default Component;
