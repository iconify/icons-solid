import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ychfvrw6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 34.073V18.754h5.3c2.997 0 5.426 2.304 5.426 5.145s-2.429 5.144-5.426 5.144H4.5m12.396-10.56h10.746m-5.373 15.866V18.483m5.364-4.833L43.5 19.023l-15.867 5.373");
}
</style><path class="ychfvrw6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ptv"} {...others} />);
}

export default Component;
