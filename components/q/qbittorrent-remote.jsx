import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nq9ppfbul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.651 22.364a5.034 5.034 0 1 1 10.069 0v3.272a5.034 5.034 0 1 1-10.069 0m0 5.035V10.533m-5.302 15.103a5.034 5.034 0 1 1-10.069 0v-3.272a5.034 5.034 0 1 1 10.069 0m0-5.035v20.138");
}
</style><circle class="cpk0fnbgt"/><path class="nq9ppfbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:qbittorrent-remote"} {...others} />);
}

export default Component;
