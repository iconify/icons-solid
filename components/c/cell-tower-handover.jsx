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

.ohnk6ztpt {
  d: path("m15.25 8l2.25 1l1-2.5");
}

.txs7gjbnm {
  d: path("m3.5 21l3-9l3 9m5 0l3-9l3 9M6.5 8.5a6.5 6.5 0 0 1 11 0");
}
</style><g class="hntgybcog"><path class="txs7gjbnm"/><path class="ohnk6ztpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cell-tower-handover"} {...others} />);
}

export default Component;
