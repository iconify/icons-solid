import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sw7ov776y {
  fill: currentColor;
  d: path("M8 21v-2h8v2zm0-3l-1-7l2-8h6l2 8l-1 7zm1.3-8h5.4l-1.25-5h-2.9z");
}
</style><path class="sw7ov776y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tools-flat-head-sharp"} {...others} />);
}

export default Component;
