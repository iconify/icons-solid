import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ouxpj2g5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5c1 0 1.5 1 1.5 2V10l7.5 4.5v2l-7.5-2v4L16 20v1.5l-4-1l-4 1V20l2.5-1.5v-4l-7.5 2v-2l7.5-4.5V5.5c0-1 .5-2 1.5-2Z");
}
</style><path class="ouxpj2g5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:airplane-flying"} {...others} />);
}

export default Component;
