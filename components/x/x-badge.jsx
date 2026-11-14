import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.smbv86eyi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20.712 13.05l-1.188 1.584a1.75 1.75 0 0 0-.334.819l-.263 1.971a1.75 1.75 0 0 1-1.503 1.503l-1.971.263a1.75 1.75 0 0 0-.819.334l-1.584 1.188a1.75 1.75 0 0 1-2.1 0l-1.584-1.188a1.75 1.75 0 0 0-.819-.334l-1.971-.263a1.75 1.75 0 0 1-1.503-1.503l-.263-1.971a1.75 1.75 0 0 0-.334-.819L3.287 13.05a1.75 1.75 0 0 1 0-2.1l1.189-1.584a1.75 1.75 0 0 0 .334-.819l.263-1.971a1.75 1.75 0 0 1 1.503-1.503l1.971-.263a1.75 1.75 0 0 0 .819-.334l1.584-1.189a1.75 1.75 0 0 1 2.1 0l1.584 1.189a1.75 1.75 0 0 0 .819.334l1.971.263a1.75 1.75 0 0 1 1.503 1.503l.263 1.971a1.75 1.75 0 0 0 .334.819l1.188 1.584a1.75 1.75 0 0 1 0 2.1M9 9l6 6m0-6l-6 6");
}
</style><path class="smbv86eyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:x-badge"} {...others} />);
}

export default Component;
