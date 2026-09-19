import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k8mf6ccnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.614 33.614l9.25 9.25v-37h-37l9.25 9.25h18.5zm-18.5 0V19.55l-9.229 9.228l-.021 14.086l14.085-.022l9.228-9.228z");
}
</style><path class="k8mf6ccnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:amd-link"} {...others} />);
}

export default Component;
