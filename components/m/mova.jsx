import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.ny_kklbmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27 24l2 5.3l4-10.6l4 10.6M11 26a2 2 0 1 1 4 0v3.3M11 24v5.3m4-3.3a2 2 0 1 1 4 0v3.3m2-3.3a2 2 0 1 1 4 0v1.3a2 2 0 1 1-4 0zm12-.94h2.4");
}
</style><rect class="j3s9ivbxi"/><path class="ny_kklbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mova"} {...others} />);
}

export default Component;
