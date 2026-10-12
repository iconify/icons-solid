import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d0i767bps {
  width: 14.5px;
  height: 16.5px;
  x: 4.75px;
  y: 4.75px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q7bgo_zbp {
  d: path("M8.25 17.75h7.5M14 2.75v8.5a2.75 2.75 0 0 1-5.5 0V8.5a1.38 1.38 0 0 1 2.75 0v2.75");
}
</style><g class="hntgybcog"><rect class="d0i767bps"/><path class="q7bgo_zbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:paper-clip"} {...others} />);
}

export default Component;
