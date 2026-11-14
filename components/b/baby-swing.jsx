import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o4l76u8qr {
  d: path("M7.5 13.5h9m-8 0V15a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5v-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wn9hnc6gn {
  d: path("M2.5 21.5L6 3.5h12l3.5 18m-13-18v10m7-10v10");
}
</style><g class="ulnmmdpxh"><path class="wn9hnc6gn"/><path class="o4l76u8qr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:baby-swing"} {...others} />);
}

export default Component;
