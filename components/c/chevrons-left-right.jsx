import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_4ow8rcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.5L2.5 12L6 15.5m4-7L6.5 12l3.5 3.5m8-7l3.5 3.5l-3.5 3.5m-4-7l3.5 3.5l-3.5 3.5");
}
</style><path class="f_4ow8rcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chevrons-left-right"} {...others} />);
}

export default Component;
