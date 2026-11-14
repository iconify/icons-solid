import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cel8kx0ms {
  d: path("M12 6.75c-1-1 1-2.25 0-3.5m5.5 13.25c.75 1.25 2.25.25 3 1.75m-14-1.75c-.75 1.25-2.25.25-3 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sfb5jdben {
  d: path("M5.5 13.25a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="sfb5jdben"/><path class="cel8kx0ms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:microbe"} {...others} />);
}

export default Component;
