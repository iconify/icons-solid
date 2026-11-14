import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x2t87wrsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 13h16q-.5 4-8 4t-8-4Zm4 8h8m-4-4v4m0-18v7.25m-2.75 0q-.75-5.75-4.5 0m10 0q.75-5.75 4.5 0");
}
</style><path class="x2t87wrsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:public-fountain"} {...others} />);
}

export default Component;
