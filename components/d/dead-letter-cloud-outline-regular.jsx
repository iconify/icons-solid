import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.myf7-9gbi {
  d: path("m19 19 -3 3");
}

.nn04ptkrq {
  d: path("m16 19 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sk-a6mb_r {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.t-ce5gbrd {
  d: path("m6 7 6 6 6 -6");
}
</style><g class="nrj6p8qat"><path class="sk-a6mb_r"/><path class="t-ce5gbrd"/><path class="nn04ptkrq"/><path class="myf7-9gbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:dead-letter-cloud-outline-regular"} {...others} />);
}

export default Component;
