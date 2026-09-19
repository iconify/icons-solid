import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f4sfjxddc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 13.264l7.288 4.21L24 21.681l-7.288-4.209Z");
}

.hyw5of31j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.905 21.405a16.905 16.905 0 1 0-23.389 15.611L24 43.5l6.484-6.484a16.91 16.91 0 0 0 10.42-15.611");
}

.m49pvabxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.712 17.473v8.418L24 30.101l7.288-4.21v-8.418M24 30.1v-8.418");
}
</style><path class="f4sfjxddc"/><path class="m49pvabxw"/><path class="hyw5of31j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:aftership"} {...others} />);
}

export default Component;
