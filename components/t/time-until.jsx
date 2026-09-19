import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.psafdqbvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.6 4.5v2.373l10.092 17.22L11.6 41.356V43.5h24.8v-2.172L26.398 24.093L36.4 6.921V4.5z");
}
</style><path class="psafdqbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:time-until"} {...others} />);
}

export default Component;
