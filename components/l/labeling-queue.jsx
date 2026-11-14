import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lgnso_rba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 4.75H21M10.5 12H21m-10.5 7.25H21M2.5 2.5H5l2 2.25L5 7H2.5Zm0 7.25H5L7 12l-2 2.25H2.5Zm0 7.25H5l2 2.25l-2 2.25H2.5Z");
}
</style><path class="lgnso_rba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:labeling-queue"} {...others} />);
}

export default Component;
