import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e_xbsubco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.071 25.966H17.829m-3.527 10.633L24.95 4.5l10.649 32.099M9.383 39.664c9.664 4.925 19.405 5.258 29.235.124");
}
</style><path class="e_xbsubco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:argos"} {...others} />);
}

export default Component;
