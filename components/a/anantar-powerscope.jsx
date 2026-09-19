import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wobyo7b6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 24l-6.15-6.15a8.698 8.698 0 1 0 0 12.3zm1.783-1.783l4.368-4.368a8.698 8.698 0 1 1 0 12.302l-4.368-4.368");
}
</style><path class="wobyo7b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:anantar-powerscope"} {...others} />);
}

export default Component;
