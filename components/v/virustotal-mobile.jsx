import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vkfli2bgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.232 11.573l-3.5-6.073l-28.51 8.093l21.41 9.413L15.14 42.5l26.638-7.162v-1.982");
}
</style><path class="vkfli2bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:virustotal-mobile"} {...others} />);
}

export default Component;
