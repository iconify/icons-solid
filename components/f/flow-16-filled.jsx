import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.mjy3fcbni {
  fill: currentColor;
  d: path("M10.05 6H9.5a1 1 0 0 0-1 1v2a2 2 0 0 1-2 2h-.55a2.5 2.5 0 1 1 0-1h.55a1 1 0 0 0 1-1V7a2 2 0 0 1 2-2h.55a2.5 2.5 0 1 1 0 1");
}
</style><path class="mjy3fcbni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flow-16-filled"} {...others} />);
}

export default Component;
