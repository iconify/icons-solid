import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wptt8kbso {
  fill: currentColor;
  d: path("M6 19V1h9l6 6v12zm8-11h5l-5-5zM2 23V7h2v14h11v2z");
}
</style><path class="wptt8kbso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:file-copy-sharp"} {...others} />);
}

export default Component;
