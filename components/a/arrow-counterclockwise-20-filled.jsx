import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ig6fbytbj {
  fill: currentColor;
  d: path("M16 10a6 6 0 0 0-9.969-4.5H7.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.16a7.5 7.5 0 1 1-2.495 5.313a.75.75 0 1 1 1.5.054A6 6 0 1 0 16 10");
}
</style><path class="ig6fbytbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-counterclockwise-20-filled"} {...others} />);
}

export default Component;
