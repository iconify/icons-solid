import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.harne1byn {
  width: 14.5px;
  height: 10.5px;
  x: 4.75px;
  y: 10.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lligbi6eh {
  d: path("M7.75 10.75V7.5a4.25 4.25 0 0 1 8.2-1.55M12 14.75v2.5");
}
</style><g class="hntgybcog"><rect class="harne1byn"/><path class="lligbi6eh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:unlock"} {...others} />);
}

export default Component;
