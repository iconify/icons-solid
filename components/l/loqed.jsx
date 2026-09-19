import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tfsee1bkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 41.5h-4.5c-7.756 0-14-6.244-14-14v-7c0-7.756 6.244-14 14-14h9c7.756 0 14 6.244 14 14v7c0 3.936-1.608 7.483-4.206 10.022L24 24");
}
</style><path class="tfsee1bkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:loqed"} {...others} />);
}

export default Component;
