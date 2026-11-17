import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jzeckoj7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15H9.667a3 3 0 0 1-3-3V9.028A3 3 0 0 1 7.69 6.77l2.333-2.041a3 3 0 0 1 3.952 0l2.333 2.041a3 3 0 0 1 1.024 2.258V12a3 3 0 0 1-3 3zm0 0v4m-6 2v-2h12v2m-8-2v2m4-2v2");
}
</style><path class="jzeckoj7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-geothermal-round"} {...others} />);
}

export default Component;
