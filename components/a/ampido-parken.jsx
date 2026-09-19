import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.edfk_-bzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.807 12.338l18.658-.004V31.3h-9.143v-9.576h-9.514l-.004-9.389M7.54 17.008l-.005 18.658h18.966v-9.143h-9.576v-9.514l-9.389-.004");
}
</style><path class="edfk_-bzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ampido-parken"} {...others} />);
}

export default Component;
