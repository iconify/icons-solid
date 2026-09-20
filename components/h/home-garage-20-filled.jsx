import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.r30rlkbfq {
  fill: currentColor;
  d: path("M11.005 2.386a1.5 1.5 0 0 0-2.01 0l-5.5 4.96A1.5 1.5 0 0 0 3 8.458v7.04A1.5 1.5 0 0 0 4.5 17H6v-4.5A1.5 1.5 0 0 1 7.5 11h5a1.5 1.5 0 0 1 1.5 1.5V17h1.5a1.5 1.5 0 0 0 1.5-1.5V8.46a1.5 1.5 0 0 0-.495-1.115zM13 14v-1.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V14zm-6 1h6v2H7z");
}
</style><path class="r30rlkbfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:home-garage-20-filled"} {...others} />);
}

export default Component;
