import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3mcq1ban {
  d: path("M12 3c3 3 4 8 3 12H9c-1 -4 0 -9 3 -12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p3m_o3bwf {
  fill: currentColor;
  d: path("M12 3c3 3 4 8 3 12H9c-1 -4 0 -9 3 -12");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pynu7yt3k {
  d: path("M3 19c3 -2 6 2 9 0s6 2 9 0");
}
</style><g class="hntgybcog"><path class="p3m_o3bwf"/><path class="f3mcq1ban"/><path class="pynu7yt3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:surfing-duotone-thin"} {...others} />);
}

export default Component;
