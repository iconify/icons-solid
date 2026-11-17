import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fm8cbmoax {
  d: path("M13 3H7M5 7v14h14m0-6V9m-6-6l6 6m-6-6v6h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zo-v9hbio {
  stroke-opacity: 0.4;
  d: path("m2 4l18 18");
}
</style><g class="nrj6p8qat"><path class="zo-v9hbio"/><path class="fm8cbmoax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-off-duocolor-sharp"} {...others} />);
}

export default Component;
