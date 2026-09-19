import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a_bjycczh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.75 42.61C41.18 38.9 45.5 31.95 45.5 24c0-11.87-9.63-21.5-21.5-21.5S2.5 12.13 2.5 24c0 7.95 4.32 14.9 10.75 18.61");
}

.omxym_x9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.63 35.47c3.96-2.29 6.62-6.57 6.62-11.47c0-7.32-5.93-13.25-13.25-13.25S10.75 16.68 10.75 24c0 4.9 2.66 9.18 6.62 11.47");
}

.smh8hwt4g {
  cx: 24px;
  cy: 24px;
  r: 5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="a_bjycczh"/><path class="omxym_x9d"/><circle class="smh8hwt4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tetherfi"} {...others} />);
}

export default Component;
