import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i7bdhbb4s {
  d: path("M5 6h14v15H5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ooyw8-y8g {
  stroke-opacity: 0.4;
  d: path("M9 6a3 3 0 0 1 6 0");
}
</style><g class="nrj6p8qat"><path class="ooyw8-y8g"/><path class="i7bdhbb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-bag-duocolor-sharp"} {...others} />);
}

export default Component;
