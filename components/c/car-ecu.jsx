import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lpmbu6bzf {
  d: path("M8.5 7.5h7v6h-7Zm-1.5 9V20m5-3.5V20m5-3.5V20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywshqnbgr {
  d: path("M3 4.5h18v12H3Z");
}
</style><g class="ulnmmdpxh"><path class="ywshqnbgr"/><path class="lpmbu6bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:car-ecu"} {...others} />);
}

export default Component;
