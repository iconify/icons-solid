import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r-mskibmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16h19M17 11.5l4.5 4.5l-4.5 4.5M5.5 9.5C4 8 7 5 5.5 3.5m4.5 6C8.5 8 11.5 5 10 3.5m4.5 6C13 8 16 5 14.5 3.5");
}
</style><path class="r-mskibmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:reaction-heat-arrow"} {...others} />);
}

export default Component;
