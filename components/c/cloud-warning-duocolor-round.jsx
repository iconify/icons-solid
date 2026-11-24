import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dcwhzub9y {
  stroke-opacity: 0.4;
  d: path("M12 10v3m0 3h.01");
}

.fyzhyacrs {
  d: path("M7 19A5 5 0 0 1 7 9c2-7 11-6 11 2a4 4 0 1 1 0 8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dcwhzub9y"/><path class="fyzhyacrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cloud-warning-duocolor-round"} {...others} />);
}

export default Component;
