import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a506aubxe {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2M19 9V7a2 2 0 0 0-2-2h-2M9 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 5v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5m-2 16v-3l5-5l3 3l-5 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.hkkmh7x6c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 9a2 2 0 0 0-2 2v10H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2Zm2 9l5-5l3 3l-5 5h-3Z");
}
</style><g class="ft5dv1b6b"><path class="hkkmh7x6c"/><path class="a506aubxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clipboard-edit-corner-duotone"} {...others} />);
}

export default Component;
