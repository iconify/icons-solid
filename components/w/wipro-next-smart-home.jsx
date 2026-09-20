import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ebohxubkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.923 21.55l-1.7 5.4l-1.6-5.4l-1.6 5.4l-1.7-5.4m23.354 5.4zc-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2s2 .9 2 2v1.3c0 1.1-.9 2-2 2m-5.754-3.4c0-1.1.9-2 2-2m-2 0v5.4");
}

.ev3obd1po {
  cx: 20.323px;
  cy: 19.15px;
  r: 0.75px;
  fill: currentColor;
}

.o513ndrck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.323 21.55v5.4m2.4-2c0 1.1.9 2 2 2s2-.9 2-2v-1.3c0-1.1-.9-2-2-2s-2 .9-2 2m0-2.1v8");
}
</style><circle class="cpk0fnbgt"/><path class="ebohxubkd"/><circle class="ev3obd1po"/><path class="o513ndrck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wipro-next-smart-home"} {...others} />);
}

export default Component;
