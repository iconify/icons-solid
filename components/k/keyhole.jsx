import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k4y57j35l {
  d: path("M12 6.75a2.5 2.5 0 0 0-1.3 4.65l-.95 5.1h4.5l-.95-5.1A2.5 2.5 0 0 0 12 6.75");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="k4y57j35l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:keyhole"} {...others} />);
}

export default Component;
