import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h0e39rbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.997 19.357a4.643 4.643 0 1 0 0 9.286v5.854C9.2 34.497 4.5 29.797 4.5 24s4.7-10.497 10.497-10.497z");
}

.vly33-bpl {
  cx: 24px;
  cy: 24px;
  r: 4.257px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vmdnxxbou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.003 19.357a4.643 4.643 0 1 1 0 9.286v5.854C38.8 34.497 43.5 29.797 43.5 24s-4.7-10.497-10.497-10.497z");
}
</style><path class="h0e39rbxh"/><circle class="vly33-bpl"/><path class="vmdnxxbou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:citizen-alert"} {...others} />);
}

export default Component;
