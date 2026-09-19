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

.yssau6bxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.218 22.481c0-2.58 2.07-4.673 4.622-4.673s4.622 2.092 4.622 4.673v3.037c0 2.581-2.07 4.673-4.622 4.673s-4.622-2.092-4.622-4.673m0 4.674V11.5m-4.436 14.019c0 2.58-2.07 4.673-4.622 4.673s-4.622-2.092-4.622-4.673v-3.037c0-2.581 2.07-4.673 4.622-4.673s4.622 2.092 4.622 4.673m0-4.674V36.5");
}
</style><rect class="j3s9ivbxi"/><path class="yssau6bxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:qbitconnect"} {...others} />);
}

export default Component;
