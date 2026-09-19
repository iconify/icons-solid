import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mycb99xao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.992 20.508h30.016M8.992 28.512h30.016M8.992 12.504h30.016M26.897 36.516V43.5l8.004-6.984");
}

.nrovkrasm {
  width: 30.016px;
  height: 32.016px;
  x: 8.992px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.041px;
}
</style><rect class="nrovkrasm"/><path class="mycb99xao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:stack-exchange"} {...others} />);
}

export default Component;
