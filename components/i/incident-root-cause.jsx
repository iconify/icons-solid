import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.knlz_6bba {
  d: path("M3 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m17-4V18m0 3h.01");
}

.vtq4febbd {
  d: path("M10 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 3v3m-7 4v-4h14");
}
</style><g class="hntgybcog"><path class="vtq4febbd"/><path class="knlz_6bba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:incident-root-cause"} {...others} />);
}

export default Component;
