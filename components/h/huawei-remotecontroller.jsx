import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bbxo2ej_o {
  width: 10.853px;
  height: 6.492px;
  x: 18.725px;
  y: 20.678px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.052px;
}

.j67jp5b_w {
  width: 21.605px;
  height: 31.393px;
  x: 13.35px;
  y: 12.107px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.577px;
}

.oxij7b_gv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.325 12.107l6.491-7.404M12.184 4.5l7.1 7.607");
}
</style><rect class="j67jp5b_w"/><rect class="bbxo2ej_o"/><path class="oxij7b_gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:huawei-remotecontroller"} {...others} />);
}

export default Component;
