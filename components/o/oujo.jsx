import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qwz_v75or {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 9.46l-9.363 16.217l-5.12-5.121L4.5 25.572V38.54h39V25.572l-5.016-5.016l-5.12 5.12Z");
}

.rh7-ft4cb {
  cx: 24px;
  cy: 30.651px;
  r: 4.229px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="qwz_v75or"/><circle class="rh7-ft4cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:oujo"} {...others} />);
}

export default Component;
