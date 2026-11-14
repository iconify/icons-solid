import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bagi8_bzn {
  d: path("M6.75 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8 7l2 2L21 15.75");
}

.kiyaizo_l {
  d: path("M21 11.813V3.5H10.5L3 11l7.5 7.5h.787");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kiyaizo_l"/><path class="bagi8_bzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:standard-cost"} {...others} />);
}

export default Component;
