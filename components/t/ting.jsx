import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ssvdaubzo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.758 38.935h.772a2.146 2.146 0 0 0 2.146-2.145V8.954A2.146 2.146 0 0 0 16.53 6.81H7.646A2.146 2.146 0 0 0 5.5 8.954V36.79a2.146 2.146 0 0 0 2.146 2.146h4.442M42.5 6.809H26.958a2.146 2.146 0 0 0-2.146 2.145v32.237m0-22.56H42.5m-3.068 22.56v-22.56");
}
</style><path class="ssvdaubzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ting"} {...others} />);
}

export default Component;
