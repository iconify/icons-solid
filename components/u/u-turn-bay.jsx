import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aihkw_bqx {
  d: path("M7 21.5V10a4 4 0 0 1 8 0v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rjnbwsbax {
  d: path("m12 14l3 3l3-3M2.5 2.5v19m19-19v19");
}
</style><g class="hntgybcog"><path class="aihkw_bqx"/><path class="rjnbwsbax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:u-turn-bay"} {...others} />);
}

export default Component;
