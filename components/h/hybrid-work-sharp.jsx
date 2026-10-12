import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rz8kbt7_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 12.75l4-3.5l4 3.5v8.5h-8v-2Zm4 8.5v-3M14 3.75h7.25v17.5H14zM16.5 8h2.25m-2.25 4h2.25m-2.25 4h2.25");
}
</style><path class="rz8kbt7_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hybrid-work-sharp"} {...others} />);
}

export default Component;
