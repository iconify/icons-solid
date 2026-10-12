import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h85on5bhp {
  d: path("M7.5 7h3v2.5h-3Zm6 0h3v2.5h-3Zm-6 5.5h3V15h-3Zm6 0h3V15h-3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mvfw5njhc {
  width: 15.5px;
  height: 14.5px;
  x: 4.25px;
  y: 3.75px;
  rx: 1.5px;
}

.tzs8177hs {
  width: 17.5px;
  height: 2.5px;
  x: 3.25px;
  y: 18.25px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="mvfw5njhc"/><path class="h85on5bhp"/><rect class="tzs8177hs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:window-frame"} {...others} />);
}

export default Component;
