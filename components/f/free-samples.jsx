import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xfccm134n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4H15M3.5 4l1.75 15.5h7L14 4m4.75 9Q19 16.25 22 16.5q-3 .25-3.25 3.5q-.25-3.25-3.25-3.5q3-.25 3.25-3.5Z");
}
</style><path class="xfccm134n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:free-samples"} {...others} />);
}

export default Component;
