import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.crq9tybqe {
  d: path("m4 20l6-8m4 0l6-8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q3dpwpbvj {
  stroke-opacity: 0.4;
  d: path("M4 4h4l12 16h-4Z");
}
</style><g class="nrj6p8qat"><path class="q3dpwpbvj"/><path class="crq9tybqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:x-duocolor-round"} {...others} />);
}

export default Component;
