import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ds0uj7bpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20.5v-12c0-2.8 2.2-5 5-5s5 2.2 5 5V11l2-1.5c1-.75 2.4.1 2 1.5l-4 7v2.5Zm3-12h.01m3.99 0h.01M8 12.5h.01m3.99 0h.01M5 17h10");
}
</style><path class="ds0uj7bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:exfoliating-glove"} {...others} />);
}

export default Component;
