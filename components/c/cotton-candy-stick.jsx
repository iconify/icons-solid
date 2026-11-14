import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ygsq-7bvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 15a3 3 0 0 1-4.25-3.75a3 3 0 0 1 1.25-5A3.25 3.25 0 0 1 12 4a3.25 3.25 0 0 1 6 2.25a3 3 0 0 1 1.25 5A3 3 0 0 1 15 15a3 3 0 0 1-6 0Zm3 3v3.5");
}
</style><path class="ygsq-7bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cotton-candy-stick"} {...others} />);
}

export default Component;
