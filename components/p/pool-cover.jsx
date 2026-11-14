import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d499e97yr {
  d: path("M5.25 14q1.5-1.5 3 0t3 0t3 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkkvtbbfm {
  d: path("M2.5 5h19v14h-19Zm10 0l9 9");
}
</style><g class="ulnmmdpxh"><path class="vkkvtbbfm"/><path class="d499e97yr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pool-cover"} {...others} />);
}

export default Component;
