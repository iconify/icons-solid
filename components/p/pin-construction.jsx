import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u9k3z_j_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21V2.5m-4.5 4H21m-14-4l8 4m0 0v6a1.75 1.75 0 1 1-3.5 0M4 21h6m9 1l-2.25-2.75a2.75 2.75 0 1 1 4.5 0Z");
}
</style><path class="u9k3z_j_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-construction"} {...others} />);
}

export default Component;
