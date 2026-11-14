import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ku-nu0bsg {
  d: path("M6 7.5h12V10h2.5v7.5H18v-2H6v2H3.5V10H6Z");
}

.tg52n2bme {
  d: path("M8.5 15.5v4h2m5-4v4h-2M9 7.5v-2H7v-2m8 4v-2h2v-2M9.5 11h.01m4.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ku-nu0bsg"/><path class="tg52n2bme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pixel-alien"} {...others} />);
}

export default Component;
