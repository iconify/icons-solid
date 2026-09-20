import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pu9_2ctog {
  fill: currentColor;
  d: path("M3 23v-3h2v1h14v-1h2v3zm-1-5V6h20v12zm8-3l5-3l-5-3zM3 4V1h18v3h-2V3H5v1zm1 12h16V8H4zm8-4");
}
</style><path class="pu9_2ctog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-template-outline-sharp"} {...others} />);
}

export default Component;
