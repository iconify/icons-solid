import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.az8gxuw5q {
  d: path("M3 21.25v-1.5a4.75 4.75 0 0 1 9.5 0v1.5Zm12.25-4.75v-3.75L13.6 11.1a1.25 1.25 0 0 1 1.77-1.77l.38.37V4.5a1.75 1.75 0 0 1 1.75-1.75h2a1.75 1.75 0 0 1 1.75 1.75v9a3 3 0 0 1-3 3ZM18.5 4.75v4.5");
}

.fv8lwxa_r {
  cx: 8px;
  cy: 6.5px;
  r: 3.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="fv8lwxa_r"/><path class="az8gxuw5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:interpreter"} {...others} />);
}

export default Component;
