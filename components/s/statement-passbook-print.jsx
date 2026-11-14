import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kbvh77egz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5V4A1.5 1.5 0 0 1 8 2.5h8A1.5 1.5 0 0 1 17.5 4v5.5M6 11.5h12a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16v-1A3.5 3.5 0 0 1 6 11.5m0 10h12m-8.25-19v7m7.75 6h.01");
}
</style><path class="kbvh77egz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:statement-passbook-print"} {...others} />);
}

export default Component;
