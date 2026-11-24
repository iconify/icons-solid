import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.qon-qwb5l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M8 21V5h2V3h4v2h2v16M12 8h.01M12 12h.01M12 16h.01");
}

.qsa49p7wx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 5h2V3h4v2h2v16H8Z");
}
</style><g class="ft5dv1b6b"><path class="qsa49p7wx"/><path class="qon-qwb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skyscraper-duotone-sharp"} {...others} />);
}

export default Component;
