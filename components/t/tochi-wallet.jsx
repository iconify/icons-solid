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

.dmi27ibiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.125 19.375h-8.25a.5.5 0 0 0-.5.5v8.25a.5.5 0 0 0 .5.5h8.25a.5.5 0 0 0 .5-.5v-8.25a.5.5 0 0 0-.5-.5");
}
</style><circle class="cpk0fnbgt"/><path class="dmi27ibiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tochi-wallet"} {...others} />);
}

export default Component;
