import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i5u1h_bym {
  d: path("M4 21V9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12M3 21h18M8 9v4m4-4v4m4-4v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x_dkqe-nn {
  stroke-opacity: 0.4;
  d: path("M10 21v-2a2 2 0 1 1 4 0v2");
}
</style><g class="nrj6p8qat"><path class="x_dkqe-nn"/><path class="i5u1h_bym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-office-duocolor-round"} {...others} />);
}

export default Component;
