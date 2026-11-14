import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b67en5wde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5c4-2 6 2 9 0s5 2 9 0m-16 4c3-2 5 2 7 0s4 2 7 0m-12 4c2-2 4 2 5 0s3 2 5 0m-14 8l18-5");
}
</style><path class="b67en5wde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:depth-contour"} {...others} />);
}

export default Component;
