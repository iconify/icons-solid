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

.w057zpb-p {
  stroke-opacity: 0.4;
  d: path("M11 8h6m-6 4h6m-6 4h6");
}

.wwqumfbic {
  d: path("M7 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zm0 0v12");
}
</style><g class="nrj6p8qat"><path class="w057zpb-p"/><path class="wwqumfbic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:newspaper-duocolor"} {...others} />);
}

export default Component;
