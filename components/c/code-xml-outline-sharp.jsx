import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wqk90fbic {
  fill: currentColor;
  d: path("m6 17l-5-5l5-5l1.4 1.4L3.825 12L7.4 15.6zm4.45 3.3l-1.9-.6l5-16l1.9.6zM18 17l-1.4-1.4l3.575-3.6L16.6 8.4L18 7l5 5z");
}
</style><path class="wqk90fbic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:code-xml-outline-sharp"} {...others} />);
}

export default Component;
