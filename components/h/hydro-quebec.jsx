import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jf19nrbny {
  cx: 17.359px;
  cy: 22.686px;
  r: 12.859px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q0cbfy1cj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.236 25.82l15.445 11.867l-.641-6.429l10.46 6.915");
}
</style><path class="q0cbfy1cj"/><circle class="jf19nrbny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hydro-quebec"} {...others} />);
}

export default Component;
