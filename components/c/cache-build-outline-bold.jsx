import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.axz8bmb1c {
  d: path("M17 4v6");
}

.hmekf-bdm {
  d: path("M3 15a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.i12kcgemc {
  d: path("m10 6.5 2 2 2 -2");
}

.nm1tlbreh {
  d: path("M7 4v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v5srdkbdr {
  d: path("M12 2v3.5");
}
</style><g class="s0phu2bbs"><path class="hmekf-bdm"/><path class="nm1tlbreh"/><path class="v5srdkbdr"/><path class="i12kcgemc"/><path class="axz8bmb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:cache-build-outline-bold"} {...others} />);
}

export default Component;
