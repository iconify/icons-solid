import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j2jdgh_nx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.5H10V10l4 1.5a2.5 2.5 0 0 1 2 2.5v1.5H5.5ZM2.5 19H19q2.5 0 2.5-2.5m-14-1V19m6-3.5V19");
}
</style><path class="j2jdgh_nx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:speed-skate"} {...others} />);
}

export default Component;
