import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hhteqwb-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 3.5v7.124m0 26.752V44.5M5.421 15.336l6.456 3.011m24.246 11.306l6.456 3.011m0-17.328l-6.456 3.011M11.877 29.653l-6.456 3.011");
}
</style><path class="hhteqwb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dainik-bhaskar"} {...others} />);
}

export default Component;
