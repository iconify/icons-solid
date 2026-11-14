import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qn-s_m-ag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3h4v4l3 3v9.5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V10l3-3Zm0 9.75l4 4m0-4l-4 4");
}
</style><path class="qn-s_m-ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:poison-control"} {...others} />);
}

export default Component;
