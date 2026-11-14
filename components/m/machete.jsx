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

.nr2fehbzj {
  d: path("M8.75 13.25L18.5 3.5c1.5-1.5 3-1 2.75 1.25C19.5 9.25 15 13 11 15.5Zm-1-1l4 4");
}

.ssti27bmm {
  d: path("M9.975 14.025za1.75 1.75 0 0 1 0 2.475L7.5 18.975a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475L7.5 14.025a1.75 1.75 0 0 1 2.475 0");
}
</style><g class="hntgybcog"><path class="nr2fehbzj"/><path class="ssti27bmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:machete"} {...others} />);
}

export default Component;
