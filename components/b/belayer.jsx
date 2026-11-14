import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.toejbcrtx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3 21.5c0-4 2.5-7 6-7s6 3 6 7m2.75-7.5h.5a3.75 3.75 0 0 1 0 7.5h-.5m0 0V17");
}
</style><path class="toejbcrtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:belayer"} {...others} />);
}

export default Component;
