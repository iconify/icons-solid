import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lxicmcbfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.096 11.387v25.298L23.984 44.5l12.92-7.746V11.278L24.007 3.5z");
}

.y05gz3bot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.096 24.037L24 16.192l12.904 7.825L24 31.942z");
}
</style><path class="lxicmcbfb"/><path class="y05gz3bot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:take-take-take"} {...others} />);
}

export default Component;
