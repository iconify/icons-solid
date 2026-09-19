import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u-ksgwy8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.023 20.334a8.172 8.172 0 1 1 .523 8.227m-.061-.092l-5.595-9.69m-2.913 8.887a8.172 8.172 0 1 1-.523-8.227m.061.092l5.595 9.69");
}
</style><path class="u-ksgwy8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mylink"} {...others} />);
}

export default Component;
