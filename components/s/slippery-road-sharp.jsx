import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xh_sqqf_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 14.5v-3.25l1.75-4L7 6h10l.5 1.25l1.75 4v3.25Zm2.5-4h9.5M8 16.75c-2 1.25 1.25 3-1 4.5m9-4.5c2 1.25-1.25 3 1 4.5");
}
</style><path class="xh_sqqf_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:slippery-road-sharp"} {...others} />);
}

export default Component;
