import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.osab24bzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.765 43.451L26.7 43.5l11.178-19.568L26.817 4.5h-11.11l11.168 19.49z");
}

.yn2mojb6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.181 29.35l-.058-11.08l7.465.049l3.352 5.554l-3.352 5.477z");
}
</style><path class="osab24bzv"/><path class="yn2mojb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:meest"} {...others} />);
}

export default Component;
