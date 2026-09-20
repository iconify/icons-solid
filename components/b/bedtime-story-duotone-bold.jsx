import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3t8z9b-e {
  d: path("M14 2a5 5 0 1 0 0 10 4 4 0 0 1 0 -10");
}

.k3hxzxbpv {
  fill: currentColor;
  d: path("M14 2a5 5 0 1 0 0 10 4 4 0 0 1 0 -10");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rsejymb4c {
  d: path("M12 13q-3 -3 -9 -3v10c4 0 7 1 9 2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uom89l0gh {
  d: path("M12 13q3 -3 9 -3v10c-4 0 -7 1 -9 2");
}
</style><g class="s0phu2bbs"><path class="k3hxzxbpv"/><path class="rsejymb4c"/><path class="uom89l0gh"/><path class="d3t8z9b-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:bedtime-story-duotone-bold"} {...others} />);
}

export default Component;
