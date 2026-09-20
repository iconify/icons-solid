import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hh9110min {
  d: path("M4 11a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.hyztp1b_a {
  d: path("m13.5 8.5 -5 5");
}

.nbsh9vihc {
  d: path("m16 16 3.5 3.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rq3kv2xzk {
  d: path("m8.5 8.5 5 5");
}
</style><g class="nrj6p8qat"><path class="hh9110min"/><path class="rq3kv2xzk"/><path class="hyztp1b_a"/><path class="nbsh9vihc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:cache-miss-outline-regular"} {...others} />);
}

export default Component;
