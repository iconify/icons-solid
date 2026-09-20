import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.zvtl5ccpl {
  fill: currentColor;
  d: path("M10 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zM2 6a2 2 0 0 1 2-2h4v12H4a2 2 0 0 1-2-2zm9 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4z");
}
</style><path class="zvtl5ccpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:split-vertical-20-filled"} {...others} />);
}

export default Component;
