import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1teogboe {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-4 11.25h6.5M15 20h6.5m-4-5.75v3M20 18.5v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o2csh_b0k {
  d: path("M3.5 3v17.5h8.7");
}
</style><g class="hntgybcog"><path class="o2csh_b0k"/><path class="a1teogboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:forecast-adjust"} {...others} />);
}

export default Component;
