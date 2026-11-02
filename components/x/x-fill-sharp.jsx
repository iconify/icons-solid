import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wjdw1nwta {
  fill: currentColor;
  d: path("M4 3h4a1 1 0 0 1 .8.4l5.2 6.933L19.2 3.4a1 1 0 1 1 1.6 1.2L15.25 12l5.55 7.4A.999.999 0 0 1 20 21h-4a1 1 0 0 1-.8-.4L10 13.667L4.8 20.6a1 1 0 0 1-1.6-1.2L8.75 12L3.2 4.6A.999.999 0 0 1 4 3");
}
</style><path class="wjdw1nwta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:x-fill-sharp"} {...others} />);
}

export default Component;
