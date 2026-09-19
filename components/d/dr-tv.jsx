import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.p8aty-yxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34 24l-16-9.238v18.476z");
}

.zc7hhleka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.797 8.797c8.397-8.396 22.01-8.396 30.406 0s8.396 22.01 0 30.406s-22.01 8.396-30.406 0");
}
</style><path class="zc7hhleka"/><path class="p8aty-yxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dr-tv"} {...others} />);
}

export default Component;
