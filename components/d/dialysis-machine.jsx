import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bzngjesww {
  width: 6.5px;
  height: 4.5px;
  x: 7px;
  y: 5px;
  rx: 1px;
}

.erwnjwbbi {
  d: path("M7.5 13.25H9m2.5 0H13M7.5 17h6m2.25-8.75h2.5a1.5 1.5 0 0 1 1.5 1.5v6.5a2.5 2.5 0 0 1-2.5 2.5h-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-71cubzd {
  width: 11px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="z-71cubzd"/><rect class="bzngjesww"/><path class="erwnjwbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dialysis-machine"} {...others} />);
}

export default Component;
