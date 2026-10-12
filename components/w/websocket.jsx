import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nzjs-gq5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 4v16m16.5-16v16M7 8.75h10m-2.5-2.5l2.5 2.5l-2.5 2.5m2.5 4H7m2.5-2.5L7 15.25l2.5 2.5");
}
</style><path class="nzjs-gq5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:websocket"} {...others} />);
}

export default Component;
