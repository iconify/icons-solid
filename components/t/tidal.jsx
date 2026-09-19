import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h6_wom11w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.333 12.333l6.834 6.834L24 12.333l6.833 6.834l6.834-6.834l6.833 6.834L37.667 26l-6.834-6.833L24 26l6.833 6.833L24 39.667l-6.833-6.834L24 26l-6.833-6.833L10.333 26L3.5 19.167Z");
}
</style><path class="h6_wom11w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tidal"} {...others} />);
}

export default Component;
