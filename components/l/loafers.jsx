import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c15w-zbbk {
  d: path("M3.25 19.25V11a1 1 0 0 1 1.2-1c2.05.4 4.3.5 6.55.25l1.5-.25c1.5 0 2.75.5 4 1.25l2.6 1.6c1.5.9 2.15 2.25 2.15 3.9v1.5a1 1 0 0 1-1 1H11.5l-1-1.5H8l-1 1.5H4.25a1 1 0 0 1-1-1Z");
}

.hhwrn8bkd {
  d: path("M11 12.75c1.75.25 3.5.25 5-.5m-12.75 3H21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c15w-zbbk"/><path class="hhwrn8bkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:loafers"} {...others} />);
}

export default Component;
