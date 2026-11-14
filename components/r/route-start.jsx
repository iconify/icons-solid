import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fk-7bh7ud {
  d: path("M2.25 18.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m3.25 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kuo_8-b1q {
  d: path("M9 18.5h6a3 3 0 0 0 0-6H9a3.5 3.5 0 0 1 0-7h10.5");
}
</style><g class="hntgybcog"><path class="kuo_8-b1q"/><path class="fk-7bh7ud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:route-start"} {...others} />);
}

export default Component;
