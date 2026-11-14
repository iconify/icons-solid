import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7zlt99jd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 5H10c5 0 8 3.5 9.5 7c-1.5 3.5-4.5 7-9.5 7H5.5c2-3 2-11 0-14m-3 4h4m-4 6h4");
}
</style><path class="h7zlt99jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:logic-gate-or"} {...others} />);
}

export default Component;
