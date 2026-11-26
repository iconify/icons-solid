import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qiwgr9bic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.4856 8.1258L17.4856 13.1258C17.8031 13.3022 18 13.6368 18 14C18 14.3632 17.8031 14.6978 17.4856 14.8742L8.4856 19.8742C8.3371 19.9567 8.1699 20 8 20C7.4477 20 7 19.5523 7 19L7 9C7 8.4477 7.4477 8 8 8C8.1699 8 8.3371 8.0433 8.4856 8.1258ZM2 14L7 14M18 14L22 14M13 4L13 10.6338");
}
</style><path class="qiwgr9bic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gate-buffer-tri-state"} {...others} />);
}

export default Component;
