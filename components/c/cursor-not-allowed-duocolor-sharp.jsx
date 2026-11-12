import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jdkg1gbhm {
  d: path("m3 3l12 4l-4 1l2 2l-3 3l-2-2l-1 4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wfqzzweiu {
  stroke-opacity: 0.4;
  d: path("M19 14a3.606 3.606 0 1 1-4 6a3.606 3.606 0 0 1 4-6m-4 6l4-6");
}
</style><g class="nrj6p8qat"><path class="wfqzzweiu"/><path class="jdkg1gbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cursor-not-allowed-duocolor-sharp"} {...others} />);
}

export default Component;
