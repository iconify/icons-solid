import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n5rzhzbbx {
  fill: currentColor;
  d: path("M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8.293 10.707a1 1 0 0 0 1.414 0l3-3a.999.999 0 1 0-1.414-1.414L13 11.586V7a1 1 0 0 0-2 0v4.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414ZM9 19h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="n5rzhzbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:monitor-download-fill-sharp"} {...others} />);
}

export default Component;
