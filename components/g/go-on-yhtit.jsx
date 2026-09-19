import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.exkausr-a {
  cx: 22.164px;
  cy: 34.367px;
  r: 8.736px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lzllwybdz {
  cx: 31.007px;
  cy: 16.406px;
  r: 5.734px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q1mk6lw5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.289 43.355v-7.41c0-6.237 9.01-6.226 9.01 0v7.448");
}

.t5ykw047k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.432 13.086c.2 4.291-2.687 8.112-6.86 9.08A8.864 8.864 0 0 1 4.43 17.032A8.91 8.91 0 0 1 7.646 6.105a8.85 8.85 0 0 1 11.298 1.21m2.488 5.67H13.43");
}
</style><path class="t5ykw047k"/><circle class="lzllwybdz"/><circle class="exkausr-a"/><path class="q1mk6lw5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:go-on-yhtit"} {...others} />);
}

export default Component;
