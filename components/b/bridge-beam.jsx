import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ddlynd71d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 8H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 5m3.5 3H8a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 8 14h-.5A1.5 1.5 0 0 1 6 12.5v-3A1.5 1.5 0 0 1 7.5 8M16 8h.5A1.5 1.5 0 0 1 18 9.5v3a1.5 1.5 0 0 1-1.5 1.5H16a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 16 8M3 18q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="ddlynd71d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bridge-beam"} {...others} />);
}

export default Component;
