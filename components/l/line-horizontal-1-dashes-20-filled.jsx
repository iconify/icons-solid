import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.jekll6byt {
  fill: currentColor;
  d: path("M2 9.75A.75.75 0 0 1 2.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 2 9.75m6 0A.75.75 0 0 1 8.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 9.75m6 0a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75");
}
</style><path class="jekll6byt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-1-dashes-20-filled"} {...others} />);
}

export default Component;
