import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hncob1bwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 11c7.18 0 13 5.82 13 13s-5.82 13-13 13zm-13 0c7.18 0 13 5.82 13 13s-5.82 13-13 13zm-13 0c7.18 0 13 5.82 13 13s-5.82 13-13 13z");
}
</style><path class="hncob1bwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nokia-wireless"} {...others} />);
}

export default Component;
