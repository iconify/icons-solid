import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhi03jbhp {
  fill: currentColor;
  d: path("M8.885 12h6.23V5.462h-6.23zm-1 9V4.48h2.423V3h3.384v1.48h2.424V21z");
}
</style><path class="dhi03jbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-4-bar-outline-sharp"} {...others} />);
}

export default Component;
