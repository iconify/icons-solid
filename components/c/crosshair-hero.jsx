import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jnytizb3q {
  cx: 24.124px;
  cy: 24.179px;
  r: 1.651px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l-2djqbrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m37.72 8.94l-6.715 12.83L43.5 28.323m-39-8.453l12.688 6.47l-6.853 12.72");
}
</style><path class="l-2djqbrb"/><circle class="jnytizb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:crosshair-hero"} {...others} />);
}

export default Component;
