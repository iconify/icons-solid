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

.lno-kuc-m {
  d: path("M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}

.qxtcwnbia {
  d: path("m17.425 14.95l1.414 1.414a1.75 1.75 0 0 1 0 2.475a1.75 1.75 0 0 1-2.475 0l-1.414-1.414a1.75 1.75 0 0 1 0-2.475a1.75 1.75 0 0 1 2.475 0M6 10a4 4 0 0 1 4-4");
}
</style><g class="hntgybcog"><path class="lno-kuc-m"/><path class="qxtcwnbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:loupe"} {...others} />);
}

export default Component;
