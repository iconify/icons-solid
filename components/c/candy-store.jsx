import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zcep92b3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M8 16a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-1.684-1.216l-.566-.409a1.419 1.419 0 0 0-2.25 1.15v.95a1.419 1.419 0 0 0 2.25 1.15l.566-.409a1.5 1.5 0 0 0 0-2.432m11.368 0l.566-.409a1.419 1.419 0 0 1 2.25 1.15v.95a1.419 1.419 0 0 1-2.25 1.15l-.566-.409a1.5 1.5 0 0 1 0-2.432");
}
</style><path class="zcep92b3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:candy-store"} {...others} />);
}

export default Component;
