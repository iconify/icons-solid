import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zoiuz9awn {
  fill: currentColor;
  d: path("M4 22v-2h16v2zm8-3l-4-4l1.4-1.4l1.6 1.55v-6.3L9.4 10.4L8 9l4-4l4 4l-1.4 1.4L13 8.85v6.3l1.6-1.55L16 15zM4 4V2h16v2z");
}
</style><path class="zoiuz9awn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:expand"} {...others} />);
}

export default Component;
