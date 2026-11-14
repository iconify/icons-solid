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

.stn2q4b5m {
  d: path("M14.25 15.25L17 16.5l-1.25 2.75M12 2.5v19");
}

.w4fe0jbzn {
  d: path("M21.5 12a9.5 5.25 0 1 0-4.5 4.5");
}
</style><g class="hntgybcog"><path class="w4fe0jbzn"/><path class="stn2q4b5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rotate-3d"} {...others} />);
}

export default Component;
