import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.q84jcqbjq {
  fill: currentColor;
  d: path("m9.665 3.129l-5.5 4.959A.5.5 0 0 0 4 8.459V15.5a.5.5 0 0 0 .5.5H6v-4.5A1.5 1.5 0 0 1 7.5 10h5a1.5 1.5 0 0 1 1.5 1.5V16h1.5a.5.5 0 0 0 .5-.5V8.46a.5.5 0 0 0-.165-.372l-5.5-4.96a.5.5 0 0 0-.67 0M4.5 17A1.5 1.5 0 0 1 3 15.5V8.46c0-.425.18-.83.496-1.115l5.5-4.959a1.5 1.5 0 0 1 2.008 0l5.5 4.96A1.5 1.5 0 0 1 17 8.458V15.5a1.5 1.5 0 0 1-1.5 1.5zm8.5-1v-2H7v2zm0-4.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V13h6z");
}
</style><path class="q84jcqbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:home-garage-20-regular"} {...others} />);
}

export default Component;
