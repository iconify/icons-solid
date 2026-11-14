import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.adu-7acnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.75c0-1.25 1-1.75 2.25-1.75h1.5c1.5-2.75 3.5-4 5.75-4c2.5 0 4.25 1.5 5 3.5l1.25 1.5l-1.75 1.5H4q-1.5 0-1.5-.75M18.25 13a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M9 9.25L8 6.5M12 8V5m3 3.75l1.25-2.5M6.5 14.5V18m8-3.5V18");
}
</style><path class="adu-7acnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ankylosaurus"} {...others} />);
}

export default Component;
