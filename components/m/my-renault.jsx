import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kbxqgvfgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.75 4.5L10.458 24L20.75 43.5L31.042 24l-5.417-10.292");
}

.zb27qk15m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.25 43.5L37.542 24L27.25 4.5L16.958 24l5.417 10.292");
}
</style><path class="kbxqgvfgp"/><path class="zb27qk15m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:my-renault"} {...others} />);
}

export default Component;
