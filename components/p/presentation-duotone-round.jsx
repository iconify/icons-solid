import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ao3vngbka {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 2a1 1 0 0 1 1 1v9a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V3a1 1 0 0 1 1-1Z");
}

.ft5dv1b6b {
  fill: none;
}

.odj-_tbzq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3v9a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V3M3 3h18m-9 13l-5 5m5-5l5 5");
}
</style><g class="ft5dv1b6b"><path class="ao3vngbka"/><path class="odj-_tbzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:presentation-duotone-round"} {...others} />);
}

export default Component;
