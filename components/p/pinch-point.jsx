import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dqeji9_-y {
  cx: 16px;
  cy: 15.5px;
  r: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hsr8babyg {
  cx: 8px;
  cy: 15.5px;
  r: 2.5px;
}

.j60y2_bjy {
  d: path("M12 4.5v7m-2-2l2 2l2-2");
}
</style><g class="hntgybcog"><circle class="hsr8babyg"/><circle class="dqeji9_-y"/><path class="j60y2_bjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pinch-point"} {...others} />);
}

export default Component;
