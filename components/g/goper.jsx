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

.umszl12tg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.488 23.346c0-1.111.9-2.012 2.012-2.012m-2.012 0v5.332m-2.22-1.016a2.012 2.012 0 0 1-3.76-.997v-1.307a2.012 2.012 0 0 1 4.025 0V24h-4.026m-5.98.654a2.012 2.012 0 0 0 4.025 0v-1.308a2.012 2.012 0 0 0-4.025 0m0-2.012v8.049m-7.694-8.1a2.666 2.666 0 1 0-5.333 0V24a2.666 2.666 0 1 0 5.333 0h-2.667m4.424-.654a2.012 2.012 0 1 1 4.025 0v1.308a2.012 2.012 0 1 1-4.025 0z");
}
</style><rect class="j3s9ivbxi"/><path class="umszl12tg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:goper"} {...others} />);
}

export default Component;
