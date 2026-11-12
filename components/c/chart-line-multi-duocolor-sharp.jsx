import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7ree_m_g {
  stroke-opacity: 0.4;
  d: path("m7 16l4-3l4 2l6-5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t2o-2lbul {
  d: path("m7 10l4-4l4 3l6-6M3 4v16h18");
}
</style><g class="nrj6p8qat"><path class="e7ree_m_g"/><path class="t2o-2lbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-line-multi-duocolor-sharp"} {...others} />);
}

export default Component;
