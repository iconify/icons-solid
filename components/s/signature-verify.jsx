import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tx3wrnbjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15c2-6 4-7.5 5-6s-1.5 7 .5 7c1.5 0 2.5-4 4-4c1 0 .5 3 2 3M3 19.5h8.5m3.25-1.5l2 2L21 15.75");
}
</style><path class="tx3wrnbjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:signature-verify"} {...others} />);
}

export default Component;
