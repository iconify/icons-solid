import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eoa4h2b0y {
  width: 15px;
  height: 12px;
  x: 5.5px;
  y: 27.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.ojhpotrvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 22.5v-4c0-5.523 4.477-10 10-10h27v21c0 5.523-4.477 10-10 10h-7");
}
</style><path class="ojhpotrvq"/><rect class="eoa4h2b0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:prezero"} {...others} />);
}

export default Component;
