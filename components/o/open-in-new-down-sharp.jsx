import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l2esorb9m {
  fill: currentColor;
  d: path("M3 21V3h18v9h-2V5H5v14h7v2zm11 0v-2h3.6L8.3 9.7l1.4-1.4l9.3 9.275V14h2v7z");
}
</style><path class="l2esorb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:open-in-new-down-sharp"} {...others} />);
}

export default Component;
