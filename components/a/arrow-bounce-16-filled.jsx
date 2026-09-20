import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.d4ervtbmz {
  fill: currentColor;
  d: path("M8.002 4.75a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0V6.561l5.718 5.72a.75.75 0 0 0 1.06 0l5.5-5.5a.75.75 0 1 0-1.06-1.061l-4.97 4.97L3.562 5.5h3.69a.75.75 0 0 0 .75-.75");
}
</style><path class="d4ervtbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-bounce-16-filled"} {...others} />);
}

export default Component;
