import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sctgx-b8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5M4.25 6h15.5v10.75H4.25zm4.25 7.25v-2m3.5 2v-4.5m3.5 4.5v-3.5m-3.5 7v4.5m0-4.5l-3.5 4.5m3.5-4.5l3.5 4.5");
}
</style><path class="sctgx-b8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:presentation-screen-sharp"} {...others} />);
}

export default Component;
