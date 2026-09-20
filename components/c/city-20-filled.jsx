import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.f9pz_sb6w {
  fill: currentColor;
  d: path("M11 2a.5.5 0 0 1 .5.5V4l1 .001a1.5 1.5 0 0 1 1.5 1.5v2.553a2.5 2.5 0 0 0-2 2.45V18h-2V8.004a2 2 0 0 0-2-2v-.503a1.5 1.5 0 0 1 1.5-1.5h1V2.5A.5.5 0 0 1 11 2M8.644 7.239c-.28-.197-.48-.204-.648-.153a1 1 0 0 0-.135.064L4.728 9.03A1.5 1.5 0 0 0 4 10.316V16.5A1.5 1.5 0 0 0 5.5 18H9V8.004a1 1 0 0 0-.356-.765M15.5 9v.004h-1a1.5 1.5 0 0 0-1.5 1.5V18h3.5a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 16.5 9z");
}
</style><path class="f9pz_sb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:city-20-filled"} {...others} />);
}

export default Component;
