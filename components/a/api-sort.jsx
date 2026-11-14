import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_a-53bai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5H6A1.5 1.5 0 0 0 4.5 5v5.5L3 12l1.5 1.5V19A1.5 1.5 0 0 0 6 20.5h.5M9 7h6.75M9 12h4.5M9 17h2.75M19 3.5v17m-3-3l3 3l3-3");
}
</style><path class="d_a-53bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:api-sort"} {...others} />);
}

export default Component;
