import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k6nj2fbya {
  d: path("M3 5h18");
}

.nmmozg1gr {
  d: path("M7 15h14");
}

.r1-ktgx-e {
  d: path("M7 10h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t33f_gbzo {
  d: path("M11 20h10");
}
</style><g class="s0phu2bbs"><path class="k6nj2fbya"/><path class="r1-ktgx-e"/><path class="nmmozg1gr"/><path class="t33f_gbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:outline-gen-outline-bold"} {...others} />);
}

export default Component;
