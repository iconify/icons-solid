import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ydkb3xb4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.011 8.604v20.96a2.994 2.994 0 0 0 2.995 2.995h8.983M5.5 36.664c5.45 1.735 11.763 2.732 18.5 2.732s13.05-.997 18.5-2.732");
}
</style><path class="ydkb3xb4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lottoland"} {...others} />);
}

export default Component;
