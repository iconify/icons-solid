import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.zhyuwkb4k {
  fill: currentColor;
  d: path("M7.01 3a.75.75 0 0 1 .712.548l2.821 10.075l2.242-7.099a.75.75 0 0 1 1.404-.07L15.495 9.5h1.755a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.69-.455l-.703-1.642l-2.392 7.573a.75.75 0 0 1-1.437-.024L6.966 6.41l-1.25 4.06A.75.75 0 0 1 5 11H2.75a.75.75 0 0 1 0-1.5h1.696l1.837-5.97A.75.75 0 0 1 7.01 3");
}
</style><path class="zhyuwkb4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pulse-20-filled"} {...others} />);
}

export default Component;
