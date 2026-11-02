import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k8nc2n2mm {
  d: path("M7 17h10a2 2 0 0 0 2-2V7a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v12m2-2a2 2 0 1 0 0 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oak4c5bhj {
  stroke-opacity: 0.4;
  d: path("M7 21h6a4 4 0 0 0 4-4");
}
</style><g class="nrj6p8qat"><path class="oak4c5bhj"/><path class="k8nc2n2mm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:book-duocolor-round"} {...others} />);
}

export default Component;
