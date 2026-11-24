import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b431r9uka {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 9H9v10H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4m-8 12v-3l5-5l3 3l-5 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.rn6ux09kz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h2M3 9h18m-8 12v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="b431r9uka"/><path class="rn6ux09kz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:credit-card-edit-corner-duotone-round"} {...others} />);
}

export default Component;
