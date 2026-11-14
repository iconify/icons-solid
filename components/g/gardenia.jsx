import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdx4qpi8e {
  d: path("M10 6.25a2.5 2.5 0 1 1 4 0A2.5 2.5 0 1 1 15.25 10A2.5 2.5 0 1 1 12 12.5A2.5 2.5 0 1 1 8.75 10A2.5 2.5 0 1 1 10 6.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywz_rdbra {
  d: path("M10.75 9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M12 21.5c-2.5 0-6.5-1-8-4c3.5 0 6.5 1 8 4m0 0c2.5 0 6.5-1 8-4c-3.5 0-6.5 1-8 4");
}
</style><g class="hntgybcog"><path class="fdx4qpi8e"/><path class="ywz_rdbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gardenia"} {...others} />);
}

export default Component;
