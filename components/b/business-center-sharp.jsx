import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ebdgmhjjv {
  fill: currentColor;
  d: path("M3 20v-5.5h7V16h4v-1.5h7V20zm8-5v-2h2v2zm-8-1.5V7h6V4h6v3h6v6.5h-7V12h-4v1.5zM10 7h4V5h-4z");
}
</style><path class="ebdgmhjjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:business-center-sharp"} {...others} />);
}

export default Component;
