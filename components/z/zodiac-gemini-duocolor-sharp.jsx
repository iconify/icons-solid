import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cij2gvuxr {
  stroke-opacity: 0.4;
  d: path("M7 5v14M17 5v14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u3zzgdblm {
  d: path("M3 3a15.81 15.81 0 0 0 18 0M3 21a15.81 15.81 0 0 1 18 0");
}
</style><g class="nrj6p8qat"><path class="cij2gvuxr"/><path class="u3zzgdblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zodiac-gemini-duocolor-sharp"} {...others} />);
}

export default Component;
