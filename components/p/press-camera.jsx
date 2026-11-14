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

.lcoepbh9c {
  d: path("M8.75 14.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M6.5 2.5V5m-4-.75l1.25 1.5m6.75-1.5l-1.25 1.5");
}

.v60xfomty {
  d: path("M6 8.5h12a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17v-5A3.5 3.5 0 0 1 6 8.5m9 0v-2h4v2");
}
</style><g class="hntgybcog"><path class="v60xfomty"/><path class="lcoepbh9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:press-camera"} {...others} />);
}

export default Component;
