import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eawry1bwu {
  d: path("M8 3.33a3.5 3.5 0 1 1 -2.96 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ww6qi_bzz {
  d: path("M10 11h11l-4 4v5h-3v-5Z");
}
</style><g class="nrj6p8qat"><path class="eawry1bwu"/><path class="ww6qi_bzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:triage-agent-outline-regular"} {...others} />);
}

export default Component;
