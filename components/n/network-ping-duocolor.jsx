import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sn1wpsbou {
  d: path("M3 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0M17 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.y-lpg7b8m {
  stroke-opacity: 0.4;
  d: path("M5 11c4 0 7 3 7 7M5 5c7 0 13 6 13 13");
}
</style><g class="nrj6p8qat"><path class="y-lpg7b8m"/><path class="sn1wpsbou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:network-ping-duocolor"} {...others} />);
}

export default Component;
