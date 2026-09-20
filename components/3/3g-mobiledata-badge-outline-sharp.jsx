import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q_kzvabdl {
  fill: currentColor;
  d: path("M2 20V4h20v16zm1-1h18V5H3zm0 0V5zm9.5-2.5h6v-5H16v1h1.5v3h-4v-7h5v-1h-6zm-7 0h5v-4L10 12l.5-.5v-4h-5v1h4v3h-4v1h4v3h-4z");
}
</style><path class="q_kzvabdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:3g-mobiledata-badge-outline-sharp"} {...others} />);
}

export default Component;
