import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kdb7kshkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.5v-37M24 24H5.5m0 0L24 42.5m10.5-37h-25a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h25a8 8 0 0 0 8-8v-21a8 8 0 0 0-8-8");
}
</style><path class="kdb7kshkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tydom"} {...others} />);
}

export default Component;
