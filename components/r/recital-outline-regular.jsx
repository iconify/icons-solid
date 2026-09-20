import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sjwck004e {
  d: path("M10.5 2 6 6.5h11.5L13 2Z");
}

.uw8-z-bjv {
  d: path("M7 20a5 5 0 0 1 10 0");
}
</style><g class="nrj6p8qat"><path class="sjwck004e"/><path class="bo51iypxr"/><path class="uw8-z-bjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:recital-outline-regular"} {...others} />);
}

export default Component;
