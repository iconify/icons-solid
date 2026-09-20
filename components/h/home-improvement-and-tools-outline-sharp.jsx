import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ov1e71hbp {
  fill: currentColor;
  d: path("M6 2h12l-3 4.2V19l-3 3l-3-3V6.2zm5 8h2V5.6L14 4h-4l1 1.6zm2 2h-2v2h2zm0 6v-2h-2v2l1 1zm-1-2");
}
</style><path class="ov1e71hbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:home-improvement-and-tools-outline-sharp"} {...others} />);
}

export default Component;
