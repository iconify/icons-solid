import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.fw9n3kbls {
  fill: currentColor;
  d: path("M8 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM1 5a2 2 0 0 1 2-2h3v10H3a2 2 0 0 1-2-2zm8 8h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9z");
}
</style><path class="fw9n3kbls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:split-vertical-16-filled"} {...others} />);
}

export default Component;
