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

.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.xtwinbqpl {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m1.75 14A2.75 2.75 0 1 1 18 15.75");
}

.y3q4v0k2f {
  d: path("M3.5 3v17.5h9.3");
}
</style><g class="hntgybcog"><path class="y3q4v0k2f"/><path class="xtwinbqpl"/><path class="is8nqnbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:auto-invest"} {...others} />);
}

export default Component;
