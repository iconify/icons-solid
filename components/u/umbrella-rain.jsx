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

.qs4cszaei {
  d: path("M3.5 15.5a8.5 8.5 0 0 1 17 0q-2.75-1.75-5.75 0q-2.75-1.75-5.5 0q-3-1.75-5.75 0");
}

.yrtd6kb7a {
  d: path("M12 14.75v4.75a1.75 1.75 0 0 1-3.5 0M6 2.5L5.25 5m7.25-2.5L12 4.25m6.75-1.75L18 5");
}
</style><g class="hntgybcog"><path class="qs4cszaei"/><path class="yrtd6kb7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:umbrella-rain"} {...others} />);
}

export default Component;
