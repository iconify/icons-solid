import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eycoib_cu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.997 8.3A1.697 1.697 0 0 0 8.3 9.997v28.006A1.697 1.697 0 0 0 9.997 39.7h28.006a1.697 1.697 0 0 0 1.697-1.697V9.997A1.697 1.697 0 0 0 38.003 8.3Z");
}

.g-l3ay1xl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.762 24.255h8.493v-8.493");
}

.hzphkcc_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.2 2.997a1.697 1.697 0 0 0-2.4 0L2.997 22.8a1.697 1.697 0 0 0 0 2.4L22.8 45.003a1.697 1.697 0 0 0 2.4 0L45.003 25.2a1.697 1.697 0 0 0 0-2.4Z");
}

.w0of-7b2u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.762 32.238h16.476V15.762");
}

.ys6733bud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.762 15.762h4.502v4.502h-4.502zm0 12.485h12.485V15.762");
}
</style><path class="eycoib_cu"/><path class="hzphkcc_u"/><path class="w0of-7b2u"/><path class="g-l3ay1xl"/><path class="ys6733bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:kfhonline"} {...others} />);
}

export default Component;
