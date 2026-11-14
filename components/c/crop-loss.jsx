import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y596qf_hz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.5v-17M8 19c-2.5 0-4-1.5-4-4c2.5 0 4 1.5 4 4Zm0 0c2.5 0 4-1.5 4-4c-2.5 0-4 1.5-4 4Zm0-6.5c-2.5 0-4-1.5-4-4c2.5 0 4 1.5 4 4Zm0 0c2.5 0 4-1.5 4-4c-2.5 0-4 1.5-4 4Zm10 2v7m-3-3l3 3l3-3");
}
</style><path class="y596qf_hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crop-loss"} {...others} />);
}

export default Component;
