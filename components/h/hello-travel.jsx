import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.btwkgac1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.585 5.491L12.957 42.51m-.35-37.019L8.979 42.51m-.35-37.019L5 42.51M43 5.49l-3.628 37.019M39.019 5.49L35.39 42.509M35.04 5.49l-3.627 37.019M35.04 5.49C33.629 30.287 6.731 8.672 5 42.508");
}

.c1btu5bil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.998 5.49c-2.465 33.718-29.124 11.997-30.04 37.018");
}

.d51dwybfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.019 5.49c-1.877 28.983-28.871 7.008-30.04 37.018");
}
</style><path class="btwkgac1g"/><path class="d51dwybfz"/><path class="c1btu5bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hello-travel"} {...others} />);
}

export default Component;
