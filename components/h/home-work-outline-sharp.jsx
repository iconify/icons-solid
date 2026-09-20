import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xjqlnn7fd {
  fill: currentColor;
  d: path("M17.23 8.77h1.54V7.23h-1.54zm0 4h1.54v-1.54h-1.54zm0 4h1.54v-1.54h-1.54zM16 20v-1h5V5h-9.615v2.189l-1-.72V4H22v16zM2 20v-8.5l6-4.27l6 4.27V20H9.27v-4.5H6.73V20zm1-1h2.73v-4.5h4.54V19H13v-7L8 8.489L3 12zm7.27 0v-4.5H5.73V19v-4.5h4.54z");
}
</style><path class="xjqlnn7fd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:home-work-outline-sharp"} {...others} />);
}

export default Component;
