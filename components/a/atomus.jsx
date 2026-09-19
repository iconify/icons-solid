import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gznplfboo {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7.024px;
  ry: 21.5px;
}

.t0wbdbc0x {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 21.5px;
  ry: 7.024px;
}
</style><ellipse class="gznplfboo"/><ellipse transform="rotate(-30 24 24)" class="t0wbdbc0x"/><ellipse transform="rotate(-60 24 24)" class="gznplfboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:atomus"} {...others} />);
}

export default Component;
