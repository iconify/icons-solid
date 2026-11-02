import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iei65lbbc {
  d: path("M3 20v-4h18v4M11 4h10v8H11Zm5 8v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w1oesmbrj {
  stroke-opacity: 0.4;
  d: path("m3 6l2-2l2 2m-4 4l2 2l2-2");
}
</style><g class="nrj6p8qat"><path class="w1oesmbrj"/><path class="iei65lbbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:standing-desk-duocolor-sharp"} {...others} />);
}

export default Component;
