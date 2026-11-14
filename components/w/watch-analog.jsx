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

.j51f-ebgg {
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.nannkfw4h {
  d: path("M8.5 7.25L9 3h6l.5 4.25m-7 9.5L9 21h6l.5-4.25M12 9.5V12l1.75 1");
}
</style><g class="hntgybcog"><path class="j51f-ebgg"/><path class="nannkfw4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:watch-analog"} {...others} />);
}

export default Component;
