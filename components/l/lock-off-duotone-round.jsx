import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.i27ep3btg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 10h3a4 4 0 0 1 4 4v3Zm4.646 10.646A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4v-3a4.006 4.006 0 0 1 3.101-3.899Z");
}

.sjfdi9bad {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.647 20.647A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4v-3c0-1.9 1.325-3.49 3.101-3.899M13 10h3a4 4 0 0 1 4 4v3M9 6a3 3 0 0 1 6 0v4M2 5l17 17");
}
</style><g class="ft5dv1b6b"><path class="i27ep3btg"/><path class="sjfdi9bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-off-duotone-round"} {...others} />);
}

export default Component;
