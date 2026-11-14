import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cmn9sdbge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5h6a2 2 0 0 1 2 2V13a2 2 0 0 1-2 2h-3.5L9 17.25V15a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2M21.25 10a9.5 9.5 0 0 1 0 4M20 17a9.5 9.5 0 0 1-3 3m-3 1.25a9.5 9.5 0 0 1-4 0M7 20a9.5 9.5 0 0 1-3-3m-1.25-3a9.5 9.5 0 0 1 0-4M4 7a9.5 9.5 0 0 1 3-3m3-1.25a9.5 9.5 0 0 1 4 0M17 4a9.5 9.5 0 0 1 3 3");
}
</style><path class="cmn9sdbge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:proximity-voice"} {...others} />);
}

export default Component;
