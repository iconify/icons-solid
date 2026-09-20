import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.fnihj0bfm {
  fill: currentColor;
  d: path("M14 2a1 1 0 1 1 0 2v5.5a2.5 2.5 0 0 1-2.5 2.5h-3v1h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1h-3A2.5 2.5 0 0 1 2 9.5V4a1 1 0 0 1 0-2z");
}
</style><path class="fnihj0bfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:projection-screen-16-filled"} {...others} />);
}

export default Component;
