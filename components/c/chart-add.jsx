import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bwvsz2b2k {
  d: path("M3.5 3v17.5h9.8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lcyk3hb9o {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-1 10v7M14.5 18h7");
}
</style><g class="hntgybcog"><path class="bwvsz2b2k"/><path class="lcyk3hb9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-add"} {...others} />);
}

export default Component;
