import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9elq579y {
  d: path("M4.25 6.25c0 1.95 3.45 3.5 7.75 3.5s7.75-1.55 7.75-3.5M4.25 12c0 1.95 3.45 3.5 7.75 3.5s7.75-1.55 7.75-3.5");
}

.dm6fc8-ju {
  d: path("M4.25 6.25c0-1.95 3.45-3.5 7.75-3.5s7.75 1.55 7.75 3.5v11.5c0 1.95-3.45 3.5-7.75 3.5s-7.75-1.55-7.75-3.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dm6fc8-ju"/><path class="c9elq579y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:database-sync"} {...others} />);
}

export default Component;
