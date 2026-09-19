import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ivbi7ob_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.43 17.33c4.46-.24 9.1 2.33 10.64 8.21a6.88 6.88 0 0 1 .05 13.71H11.89c-9.21-1.25-10.47-14.66 0-16.46a10.14 10.14 0 0 1 8.54-5.46m0 0");
}

.yj2v_5m-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.55 18.37a6.22 6.22 0 1 1 8.58 8.21m-3-14.3V8.75m-6.25 6.12l-2.5-2.5m15 15.01l2.5 2.49m.09-8.75h3.53m-6.12-6.25l2.5-2.5");
}
</style><path class="ivbi7ob_u"/><path class="yj2v_5m-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:simpleweather"} {...others} />);
}

export default Component;
