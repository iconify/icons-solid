import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pktfws8sr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5V10a3.5 3.5 0 0 0 7 0V2.5m-3.5 11v8m6.367-17.008a3.5 3.5 0 0 1 0 4.016m2.867-6.023a7 7 0 0 1 0 8.03");
}
</style><path class="pktfws8sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tuning-a440"} {...others} />);
}

export default Component;
