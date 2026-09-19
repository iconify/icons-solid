import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jk61qpbiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.987 11.342V42.5h31.158");
}

.p_j9a5k4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.855 5.5h31.158v31.158H10.855zm4.869 5.842h21.42m-21.42 5.842h21.42m-21.42 5.842h21.42m-21.42 5.842h11.684");
}
</style><path class="jk61qpbiq"/><path class="p_j9a5k4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:doi-to-scihub"} {...others} />);
}

export default Component;
