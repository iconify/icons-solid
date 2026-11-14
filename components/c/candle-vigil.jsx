import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kydufpbwj {
  d: path("M5 3.5V16a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5V3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xhhou-5jt {
  d: path("M9 13h6v5.25H9Zm3-7c1.75 1.75 2 3 0 4c-2-1-1.75-2.25 0-4Z");
}
</style><g class="ulnmmdpxh"><path class="kydufpbwj"/><path class="xhhou-5jt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:candle-vigil"} {...others} />);
}

export default Component;
