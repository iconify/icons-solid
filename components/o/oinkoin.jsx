import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n7_w-xblc {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 19.5px;
  ry: 12.829px;
}

.xozqp6pil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.55 24c0 2.244-1.211 4.064-2.705 4.064S29.14 26.244 29.14 24s1.21-4.064 2.705-4.064S34.55 21.756 34.55 24m-15.69 0c0 2.244-1.21 4.064-2.705 4.064S13.45 26.244 13.45 24s1.211-4.064 2.705-4.064S18.86 21.756 18.86 24");
}
</style><ellipse class="n7_w-xblc"/><path class="xozqp6pil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:oinkoin"} {...others} />);
}

export default Component;
