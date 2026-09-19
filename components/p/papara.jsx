import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.o06oxzfns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.777 22.096v21.619");
}

.ts6lobciv {
  width: 20.429px;
  height: 27.596px;
  x: 13.777px;
  y: 4.715px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 10.214px;
  ry: 10.214px;
}
</style><rect class="ts6lobciv"/><path class="o06oxzfns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:papara"} {...others} />);
}

export default Component;
