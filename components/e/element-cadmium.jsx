import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6-up50lz {
  d: path("M8.489 7.25h7.022a1.5 1.5 0 0 1 1.379.909l.36.841a1.255 1.255 0 0 1-1.154 1.75H7.904A1.255 1.255 0 0 1 6.75 9l.36-.841a1.5 1.5 0 0 1 1.379-.909m0 6.25h7.022a1.5 1.5 0 0 1 1.379.909l.36.841A1.255 1.255 0 0 1 16.096 17H7.904a1.255 1.255 0 0 1-1.154-1.75l.36-.841a1.5 1.5 0 0 1 1.379-.909");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kebju1mox {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3");
}
</style><g class="hntgybcog"><path class="kebju1mox"/><path class="h6-up50lz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:element-cadmium"} {...others} />);
}

export default Component;
