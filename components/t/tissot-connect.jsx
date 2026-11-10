import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bw8kgfp8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.565 14.475h16.87M24 28.065v-13.59m-4.465 23.56h2.666m-1.333 2.666v-2.666M24 36.236h6.264V42.5H24zm-6.264 0H24V42.5h-6.264zm9.396 4.465v-2.666m-1.333 1.333h2.666");
}

.eh31xttof {
  cx: 24px;
  cy: 19.88px;
  r: 14.38px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="eh31xttof"/><path class="bw8kgfp8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tissot-connect"} {...others} />);
}

export default Component;
