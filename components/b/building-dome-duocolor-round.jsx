import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.evangtbzc {
  stroke-opacity: 0.4;
  d: path("M6 13v4m4-4v4m4-4v4m4-4v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y6x97f7ij {
  d: path("M3 9h18M5 9c0-3.314 3.134-6 7-6s7 2.686 7 6M3 21h18");
}
</style><g class="nrj6p8qat"><path class="evangtbzc"/><path class="y6x97f7ij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-dome-duocolor-round"} {...others} />);
}

export default Component;
