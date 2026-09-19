import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hxq7w6ncb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.295 22.033a7.584 7.584 0 1 1-10.689 0l5.345-5.17Z");
}

.z0ag7s5np {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.444 15.593a16.311 16.311 0 1 1-22.987 0L23.95 4.475Z");
}
</style><path class="z0ag7s5np"/><path class="hxq7w6ncb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:drops"} {...others} />);
}

export default Component;
