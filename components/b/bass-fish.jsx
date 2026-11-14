import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vys6pg2bq {
  d: path("M3 9.5c3-4.5 10-5 14 .5l4.5-3.5v11L17 14c-4 5.5-11 5-13.5.5L7 12Zm6 0h.01");
}

.wqsm1w6_y {
  d: path("M11.5 8.5q1.5 3.5 0 7");
}
</style><g class="ulnmmdpxh"><path class="vys6pg2bq"/><path class="wqsm1w6_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bass-fish"} {...others} />);
}

export default Component;
