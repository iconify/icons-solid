import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t420hac0k {
  fill: currentColor;
  d: path("M9.385 19v-5.23h5.23V19zm1-1h3.23v-3.23h-3.23zm-7.781-5.77L2 11.44L12 4l4.346 3.223V5h1.885v3.62l3.788 2.819l-.603.792L12 5.256zM12 16.385");
}
</style><path class="t420hac0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:roofing-outline"} {...others} />);
}

export default Component;
