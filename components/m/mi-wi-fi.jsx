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

.nwd_i9b4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.568 19.507c8.024-9.448 21.338-9.448 28.864.393m-22.247 6.368c3.473-5.789 11.578-5.789 15.63 0m-5.499 6.368L24 35.531l-2.316-2.895q2.316-2.316 4.631 0");
}
</style><path class="nwd_i9b4s"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mi-wi-fi"} {...others} />);
}

export default Component;
