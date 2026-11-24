import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-_53y6hj {
  d: path("m12 3l8 3l-8 3l-8-3zM3 21h18M20 6v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qxb1eforw {
  stroke-opacity: 0.4;
  d: path("M6 12v5m4-5v5m4-5v5m4-5v5");
}
</style><g class="nrj6p8qat"><path class="qxb1eforw"/><path class="d-_53y6hj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:university-duocolor-sharp"} {...others} />);
}

export default Component;
