import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.v7j3rwbbc {
  fill: currentColor;
  d: path("M8 2a2 2 0 0 0-2 2v.17c.313-.11.65-.17 1-.17h6c.35 0 .687.06 1 .17V4a2 2 0 0 0-2-2zM7 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1V7a2 2 0 0 0-2-2zm0 11c-.35 0-.687-.06-1-.17V16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-.17c-.313.11-.65.17-1 .17z");
}
</style><path class="v7j3rwbbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:smartwatch-20-filled"} {...others} />);
}

export default Component;
