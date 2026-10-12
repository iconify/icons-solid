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

.j3jribyxk {
  cx: 14.75px;
  cy: 9.25px;
  r: 6.5px;
}

.nj5ucobzf {
  cx: 9.75px;
  cy: 14.25px;
  r: 7px;
}
</style><g class="hntgybcog"><circle class="nj5ucobzf"/><circle class="j3jribyxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:eclipse"} {...others} />);
}

export default Component;
