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

.k_2h91g8y {
  d: path("M6 19a8.5 8.5 0 1 1 12 0m-6-6l3.5-3.5");
}

.wuzieab_m {
  d: path("M14.25 9.5za1.25 1.25 0 0 1 1.25 1.25a.518.518 0 0 1-.884.366l-.732-.732a.518.518 0 0 1 .366-.884M12 13h.01");
}
</style><g class="hntgybcog"><path class="k_2h91g8y"/><path class="wuzieab_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:reading-actual"} {...others} />);
}

export default Component;
