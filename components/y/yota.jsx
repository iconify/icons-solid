import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i2db13-oe {
  cx: 24px;
  cy: 38.468px;
  r: 5.032px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xa-7fccoh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.39 43.5v-5.032c0-5.86 4.75-10.61 10.61-10.61s10.61 4.75 10.61 10.61V43.5m0-39v5.032c0 5.86-4.75 10.61-10.61 10.61s-10.61-4.75-10.61-10.61V4.5M24 27.858v-7.716");
}
</style><circle class="i2db13-oe"/><path class="xa-7fccoh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yota"} {...others} />);
}

export default Component;
