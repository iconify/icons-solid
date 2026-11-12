import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a2aqw9y_p {
  d: path("M3 20H3.0001");
}

.ftbpoxdwt {
  d: path("M12 20V12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hs76-fbie {
  d: path("M16.5 20V8");
}

.td-w4-bli {
  d: path("M21 20V4");
}

.ty65c8klf {
  d: path("M7.5 20V16");
}
</style><g class="hntgybcog"><path class="a2aqw9y_p"/><path class="ty65c8klf"/><path class="ftbpoxdwt"/><path class="hs76-fbie"/><path class="td-w4-bli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:signal-linear"} {...others} />);
}

export default Component;
