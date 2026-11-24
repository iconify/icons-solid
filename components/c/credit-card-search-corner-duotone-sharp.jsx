import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.lhtvk-bmz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 9V5H3v14h6M3 9h18m-3 9a2.828 2.828 0 1 1-4-4a2.828 2.828 0 0 1 4 4m0 0l3 3");
}

.ygbf3ub5p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 5v4H9v10H3V5Z");
}
</style><g class="ft5dv1b6b"><path class="ygbf3ub5p"/><path class="lhtvk-bmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:credit-card-search-corner-duotone-sharp"} {...others} />);
}

export default Component;
