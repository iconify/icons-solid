import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hbdeh7bww {
  cx: 11.5px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 9px;
  ry: 9.5px;
}

.wwodwyb6k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 33.214V45.5m0-43v12.286m15.203-5.989l-8.687 8.688M45.5 24H33.214m5.989 15.203l-8.687-8.687");
}
</style><path class="wwodwyb6k"/><ellipse class="hbdeh7bww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:otovo"} {...others} />);
}

export default Component;
