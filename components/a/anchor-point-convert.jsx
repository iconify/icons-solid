import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.unit7vbcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14.5h5v5H3ZM8 17c5 0 7-11.5 13-12.5m-15.5 10v-5m-2-2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="unit7vbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:anchor-point-convert"} {...others} />);
}

export default Component;
