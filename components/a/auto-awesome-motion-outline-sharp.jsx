import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w4r7n9cag {
  fill: currentColor;
  d: path("M11 21V11h10v10zm1-1h8v-8h-8zm-5-2.77V7h10.23v1H8v9.23zm-4-4V3h10.23v1H4v9.23zM12 20v-8z");
}
</style><path class="w4r7n9cag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:auto-awesome-motion-outline-sharp"} {...others} />);
}

export default Component;
