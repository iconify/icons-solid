import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e18i-wb_a {
  d: path("M15.25 10.75v1.5h-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pt7sbe93l {
  d: path("M8.125 2.5h7.75A2.625 2.625 0 0 1 18.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-7.75A2.625 2.625 0 0 1 5.5 18.875V5.125A2.625 2.625 0 0 1 8.125 2.5M3 21.5h18");
}
</style><g class="hntgybcog"><path class="pt7sbe93l"/><path class="e18i-wb_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:door-flush"} {...others} />);
}

export default Component;
