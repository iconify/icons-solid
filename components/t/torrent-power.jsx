import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s_iq-8b0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.9 27.7v7.4h7.4V12.9h-7.4v7.4h22.2v-7.4h-7.4v22.2h7.4v-7.4z");
}

.z_ed2rbzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.9 5.5l-7.4 7.4v22.2l7.4 7.4h22.2l7.4-7.4V12.9l-7.4-7.4z");
}
</style><path class="z_ed2rbzq"/><path class="s_iq-8b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:torrent-power"} {...others} />);
}

export default Component;
