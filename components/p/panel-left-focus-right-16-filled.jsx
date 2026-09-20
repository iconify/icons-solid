import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.z7xyocf4l {
  fill: currentColor;
  d: path("M12.004 13a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zM6 4v8H4.004a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z");
}
</style><path class="z7xyocf4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:panel-left-focus-right-16-filled"} {...others} />);
}

export default Component;
