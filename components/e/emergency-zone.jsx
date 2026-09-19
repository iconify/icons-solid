import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mx-fwobrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 39.284h6.324m4.217 0H43.5m-32.676 0L17.15 8.716h13.7m1.022 4.94l5.303 25.627M24.527 13.657v15.355");
}

.spmelybnm {
  cx: 24.527px;
  cy: 32.965px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="mx-fwobrx"/><circle class="spmelybnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emergency-zone"} {...others} />);
}

export default Component;
