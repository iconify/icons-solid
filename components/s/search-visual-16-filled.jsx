import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.qrhpmwbyo {
  fill: currentColor;
  d: path("M2 4.75A2.75 2.75 0 0 1 4.75 2h.5a.75.75 0 0 1 0 1.5h-.5c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-1.5 0zm12 6.5A2.75 2.75 0 0 1 11.25 14h-.5a.75.75 0 0 1 0-1.5h.5c.69 0 1.25-.56 1.25-1.25v-.5a.75.75 0 0 1 1.5 0zm0-6.5A2.75 2.75 0 0 0 11.25 2h-.5a.75.75 0 0 0 0 1.5h.5c.69 0 1.25.56 1.25 1.25v.5a.75.75 0 0 0 1.5 0zM4.75 14A2.75 2.75 0 0 1 2 11.25v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5zM8 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4M5.25 6a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5");
}
</style><path class="qrhpmwbyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:search-visual-16-filled"} {...others} />);
}

export default Component;
