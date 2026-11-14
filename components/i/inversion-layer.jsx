import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pyi2hgtuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19M14 14H2.5V9h19v2.3m-19 7.2h10.8m3.45-1v-2.75a1.75 1.75 0 0 1 3.5 0v2.75a2.5 2.5 0 1 1-3.5 0Z");
}
</style><path class="pyi2hgtuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:inversion-layer"} {...others} />);
}

export default Component;
