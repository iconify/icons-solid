import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rto5arbqn {
  d: path("M7.5 20.5V13L12 2.5L16.5 13v7.5M4 13h16M9 9.5h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vm4iw_bul {
  d: path("M3.5 20.5q2-1.5 4 0q2.25 1.5 4.5 0t4.5 0q2 1.5 4 0");
}
</style><g class="ulnmmdpxh"><path class="rto5arbqn"/><path class="vm4iw_bul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-oil-rig"} {...others} />);
}

export default Component;
