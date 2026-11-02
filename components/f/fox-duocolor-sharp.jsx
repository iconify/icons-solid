import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hwn02cc6z {
  stroke-opacity: 0.4;
  d: path("m9 12l1 1m5-1l-1 1m-2 3h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rv5rbsb-r {
  d: path("m14 8l5-5v7l1 3l-8 8l-8-8l1-3V3l5 5z");
}
</style><g class="nrj6p8qat"><path class="hwn02cc6z"/><path class="rv5rbsb-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fox-duocolor-sharp"} {...others} />);
}

export default Component;
