import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqm86910j {
  d: path("M14 17c-2-2-3.5-4.5-3.5-7a3.5 3.5 0 0 1 7 0c0 2.5-1.5 5-3.5 7m0-7h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v93ymqbrq {
  d: path("M7 20.5v-15a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h4");
}
</style><g class="hntgybcog"><path class="v93ymqbrq"/><path class="aqm86910j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:local-news"} {...others} />);
}

export default Component;
