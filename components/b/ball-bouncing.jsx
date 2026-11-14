import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wkr2gobgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 8.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M3 5.5c1.5 6.5 2.5 13 4 13c1.25 0 2-2 3-4.5m-7 7.5h18");
}
</style><path class="wkr2gobgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ball-bouncing"} {...others} />);
}

export default Component;
