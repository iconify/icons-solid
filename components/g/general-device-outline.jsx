import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tgwli83vs {
  fill: currentColor;
  d: path("M8 18V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v13zm2-2h4V5h-4zm-2 5v-2h8v2zm2-5h4z");
}
</style><path class="tgwli83vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:general-device-outline"} {...others} />);
}

export default Component;
