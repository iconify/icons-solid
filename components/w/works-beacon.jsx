import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.opkgvacfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 15v-4a4.5 4.5 0 0 1 9 0v4M5 15h14v5H5Zm7-13v1.5M4.5 6l1.25 1.25M19.5 6l-1.25 1.25M2.5 11h1.25m16.5 0h1.25");
}
</style><path class="opkgvacfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:works-beacon"} {...others} />);
}

export default Component;
