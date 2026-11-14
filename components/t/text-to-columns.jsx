import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qz88-p0tx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6H10v9H2.5ZM14 6h7.5v9H14Zm-2-1.5V6m0 2.5V10m0 2.5V14m0 2.5V18m-7.25-7.5h3m8.5 0h3M9.75 20H4m2-2l-2 2l2 2m8.25-2H20m-2-2l2 2l-2 2");
}
</style><path class="qz88-p0tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:text-to-columns"} {...others} />);
}

export default Component;
