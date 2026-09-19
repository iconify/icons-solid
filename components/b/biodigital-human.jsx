import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x_2m3kjwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.387 42.5H5.5V12.113A6.613 6.613 0 0 1 12.113 5.5H24v30.387a6.613 6.613 0 0 1-6.613 6.613m18.5 0H24V24h11.887a6.613 6.613 0 0 1 6.613 6.613v5.274a6.613 6.613 0 0 1-6.613 6.613m0-18.5H24V5.5h11.887a6.613 6.613 0 0 1 6.613 6.613v5.274A6.613 6.613 0 0 1 35.887 24");
}
</style><path class="x_2m3kjwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:biodigital-human"} {...others} />);
}

export default Component;
