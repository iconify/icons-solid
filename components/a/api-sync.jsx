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

.n3opjgvay {
  d: path("M4.5 12a7.6 7.6 0 0 1 13.25-5m1.75 5a7.6 7.6 0 0 1-13.25 5");
}

.qbgp8rbjl {
  d: path("M17.75 4v3h-3m-8.5 13v-3h3");
}
</style><g class="hntgybcog"><path class="n3opjgvay"/><path class="qbgp8rbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:api-sync"} {...others} />);
}

export default Component;
