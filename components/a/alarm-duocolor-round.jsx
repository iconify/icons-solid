import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzz5rps4c {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 0 0-16 0m8-4v4h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z3i3f4mzl {
  stroke-opacity: 0.4;
  d: path("m3 6l3-3m12 0l3 3");
}
</style><g class="nrj6p8qat"><path class="z3i3f4mzl"/><path class="hzz5rps4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:alarm-duocolor-round"} {...others} />);
}

export default Component;
