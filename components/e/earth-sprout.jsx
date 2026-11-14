import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qwgldg5km {
  d: path("M5 15a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.sn4_ctbzs {
  d: path("M8.5 15a3.5 7 0 1 0 7 0a3.5 7 0 1 0-7 0ZM5 15h14m-7-7V5.5m0 0q.75-3 4.5-3q-.75 3-4.5 3Zm0 0q-.75-3-4.5-3q.75 3 4.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qwgldg5km"/><path class="sn4_ctbzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:earth-sprout"} {...others} />);
}

export default Component;
