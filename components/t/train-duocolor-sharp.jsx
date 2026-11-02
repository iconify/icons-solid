import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0n92mbin {
  stroke-opacity: 0.4;
  d: path("M9 14h.01M15 14h.01");
}

.mc27e0bpp {
  d: path("M5 17V6l3-3h8l3 3v11zm3 0l-2 4m10-4l2 4M5 10h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b0n92mbin"/><path class="mc27e0bpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:train-duocolor-sharp"} {...others} />);
}

export default Component;
