import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ol4q0z94u {
  fill: currentColor;
  d: path("M17.5 10a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1zM14 2a2 2 0 0 1 2 2v4H4V4a2 2 0 0 1 2-2zM4 11v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4z");
}
</style><path class="ol4q0z94u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:split-horizontal-20-filled"} {...others} />);
}

export default Component;
