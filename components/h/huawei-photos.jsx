import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ciuliaccs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.597 35.65c8.102-19.27 19.18-7.636 26.42.184c.558.603 2.446-1.406 2.446-1.406");
}

.ktb6cfbzg {
  width: 37px;
  height: 33.82px;
  x: 5.5px;
  y: 7.09px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.otyepqbrf {
  cx: 31.766px;
  cy: 18.19px;
  r: 2.878px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="ktb6cfbzg"/><path class="ciuliaccs"/><circle class="otyepqbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:huawei-photos"} {...others} />);
}

export default Component;
