import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.i1wik9edj {
  fill: currentColor;
  d: path("M5 5v2.5a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1H6V1.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1zm6-.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M8.854 16.146L6.207 13.5l2.647-2.646a.5.5 0 0 0-.708-.708L5.5 12.793l-2.646-2.647a.5.5 0 0 0-.708.708L4.793 13.5l-2.647 2.646a.5.5 0 0 0 .708.708L5.5 14.207l2.646 2.647a.5.5 0 0 0 .708-.708M11.5 13a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm4-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="i1wik9edj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:math-symbols-20-regular"} {...others} />);
}

export default Component;
