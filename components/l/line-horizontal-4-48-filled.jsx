import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xzyapnbjx {
  fill: currentColor;
  d: path("M42.5 38a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1 0-3zm0-10a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1 0-3zm0-10a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1 0-3zm0-10a1.5 1.5 0 0 1 0 3h-37a1.5 1.5 0 0 1 0-3z");
}
</style><path class="xzyapnbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-4-48-filled"} {...others} />);
}

export default Component;
