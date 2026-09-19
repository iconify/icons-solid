import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ef21ymror {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.249 15.636v16.728M24 4.5v39m5.751-29.441V33.94m5.752-14.003v8.125m-28.756-8.34v8.555m5.751-15.102v21.65M41.254 22.04v3.92");
}
</style><path class="ef21ymror"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fairbuds"} {...others} />);
}

export default Component;
