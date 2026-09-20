import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wz79tbc-m {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm2.73-2.5h1V12h-1zm7.54 0h1V7h-1zm-3.77 0h1V14h-1zm0-4.5h1v-2h-1zM5 19V5z");
}
</style><path class="wz79tbc-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:analytics-outline-sharp"} {...others} />);
}

export default Component;
