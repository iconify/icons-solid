import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l54gxicoi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12.25V9.5l7-6l7 6v2.75M2.5 21.5v-5L3.75 15L5 16.5v5m3 0v-5L9.25 15l1.25 1.5v5m3 0v-5l1.25-1.5L16 16.5v5m3 0v-5l1.25-1.5l1.25 1.5v5m-19-3h19M12 9h.01");
}
</style><path class="l54gxicoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:suburb"} {...others} />);
}

export default Component;
