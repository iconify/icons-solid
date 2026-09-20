import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ml5m0mbud {
  width: 37px;
  height: 7.618px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.qgd46jxrf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.912 42.5c7.858 0 8.788-7.618 6.53-7.618H6.587c-.603 0-1.088.486-1.088 1.089v5.44c0 .604.485 1.089 1.088 1.089z");
}

.rlv8bxb-q {
  width: 13.059px;
  height: 7.618px;
  x: 17.471px;
  y: 25.088px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}

.sqxxk462k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.088 15.293c-7.858 0-8.788 7.618-6.53 7.618h22.854c.603 0 1.088-.486 1.088-1.089v-5.44c0-.604-.485-1.089-1.088-1.089z");
}
</style><rect class="ml5m0mbud"/><path class="sqxxk462k"/><rect class="rlv8bxb-q"/><path class="qgd46jxrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:importass"} {...others} />);
}

export default Component;
