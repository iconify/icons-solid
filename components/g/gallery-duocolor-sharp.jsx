import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-4e0nbmo {
  d: path("M3 3h18v14H3Z");
}

.hwfbrrxqq {
  stroke-opacity: 0.4;
  d: path("m3 13l6-6l5 5l3-3l4 4M3 21h7m4 0h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hwfbrrxqq"/><path class="b-4e0nbmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gallery-duocolor-sharp"} {...others} />);
}

export default Component;
