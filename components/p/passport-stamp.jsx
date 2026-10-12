import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eh9cgyzep {
  d: path("M9.75 7.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-.9 6.52l5.43-.96q.98-.17 1.15.81l.53 2.96q.17.98-.81 1.15l-5.43.96q-.98.17-1.15-.81l-.53-2.96q-.17-.98.81-1.15m1.67 2.24l2.96-.52");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1ghlpbud {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="w1ghlpbud"/><path class="eh9cgyzep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:passport-stamp"} {...others} />);
}

export default Component;
