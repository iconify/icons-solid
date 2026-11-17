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

.tr6fl5zng {
  stroke-opacity: 0.4;
  d: path("M4 15h5v5m0-5l-6 6");
}

.yuu8r1_fu {
  d: path("M14 19h5V5H5v5");
}
</style><g class="nrj6p8qat"><path class="tr6fl5zng"/><path class="yuu8r1_fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:external-link-alt-duocolor-sharp"} {...others} />);
}

export default Component;
