import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4stnrb-k {
  d: path("M6 21.5v-14a5 5 0 0 1 5-5h4.75v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w05rf-umk {
  d: path("M12 7.25a3.75 3.75 0 0 1 7.5 0ZM3.5 21.5h5m5.625-7.5h3.75a2.625 2.625 0 0 1 2.625 2.625v2.25a2.625 2.625 0 0 1-2.625 2.625h-3.75a2.625 2.625 0 0 1-2.625-2.625v-2.25A2.625 2.625 0 0 1 14.125 14m.125 3.75h3.5");
}
</style><g class="hntgybcog"><path class="a4stnrb-k"/><path class="w05rf-umk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lighting-controller"} {...others} />);
}

export default Component;
