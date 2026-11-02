import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1ynb0bhj {
  stroke-opacity: 0.4;
  d: path("M15 8a3 3 0 0 1-6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w7mc2oblu {
  d: path("M3 4h18v16H3Z");
}
</style><g class="nrj6p8qat"><path class="h1ynb0bhj"/><path class="w7mc2oblu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-bag-alt-duocolor-sharp"} {...others} />);
}

export default Component;
