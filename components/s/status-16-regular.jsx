import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.l-j7o8k8j {
  fill: currentColor;
  d: path("M14.354 1.647a2.27 2.27 0 0 0-3.207 0l-4.25 4.25a.5.5 0 0 0-.121.195l-1.25 3.75a.5.5 0 0 0 .632.633l3.75-1.25a.5.5 0 0 0 .196-.121l4.25-4.25a2.27 2.27 0 0 0 0-3.207m-2.5.707a1.268 1.268 0 0 1 1.793 1.793L9.48 8.313l-2.69.897l.897-2.69zM8 3q.184 0 .366.013l.883-.883a6 6 0 1 0 4.621 4.621l-.883.884Q13 7.815 13 8a5 5 0 1 1-5-5");
}
</style><path class="l-j7o8k8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:status-16-regular"} {...others} />);
}

export default Component;
