import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ja55x6bgj {
  width: 31.429px;
  height: 22px;
  x: 8.286px;
  y: 13px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
}

.jme8quuie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.095 18.397h7.425m-3.713 11.206V18.397m14.098 0l-3.712 11.206l-3.712-11.206M24.258 9l3.05-4.028M22.52 6.065L24.258 9");
}

.vm324oo_j {
  width: 39px;
  height: 30px;
  x: 4.5px;
  y: 9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}
</style><rect class="vm324oo_j"/><rect class="ja55x6bgj"/><path class="jme8quuie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hanju-tv"} {...others} />);
}

export default Component;
