import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4ksau0lb {
  d: path("M14 3h5");
}

.d8vl7nsmr {
  d: path("M2 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
}

.kywmzznkm {
  d: path("M11 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
}

.pjw5o-b4z {
  d: path("M5 3h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="d8vl7nsmr"/><path class="kywmzznkm"/><path class="pjw5o-b4z"/><path class="c4ksau0lb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:outer-join-outline-bold"} {...others} />);
}

export default Component;
