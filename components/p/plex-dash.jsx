import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cduay_kcw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24.959h7.392l4.742 7.976l11.608-19.78l5.84 10.01H42.5");
}

.ce2wq9w3j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.269 16.86l4.283 7.217l-8.95 15.353l-8.496.035zM24.29 8.535l2.855 4.424l-4.214 7.453l-6.86-11.738z");
}
</style><path class="cduay_kcw"/><path class="ce2wq9w3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:plex-dash"} {...others} />);
}

export default Component;
