import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ywxdejbnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h19v4.5h-19Zm2 0a1.5 1.5 0 0 1 3 0m3 0a1.5 1.5 0 0 1 3 0m3 0a1.5 1.5 0 0 1 3 0M5 12.75L3 3.5m9 9.25V3.5m7 9.25l2-9.25");
}
</style><path class="ywxdejbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:stage-floor-lights"} {...others} />);
}

export default Component;
