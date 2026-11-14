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

.qwhe5z3ha {
  d: path("M3.5 20.5v-17h17v17M12 3.5V7");
}

.rf4oz_bbi {
  d: path("M6.5 12.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.v_s9v1w5p {
  d: path("M10 12.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="qwhe5z3ha"/><path class="rf4oz_bbi"/><path class="v_s9v1w5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gamelan-gong"} {...others} />);
}

export default Component;
