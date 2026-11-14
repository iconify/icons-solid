import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7u29_nhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21l5.5-5.5m0 0c3-3-1.5-6 1-9.5S18 3 18 7.5c0 4-4.5 4.5-3 8.5c1 2.5 4.5 3 6.5 1.5");
}
</style><path class="t7u29_nhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dance-ribbon"} {...others} />);
}

export default Component;
