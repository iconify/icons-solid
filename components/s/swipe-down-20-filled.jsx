import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.nuqmcbb4v {
  fill: currentColor;
  d: path("M14 6a4 4 0 0 1-2.25 3.598V8.437a3 3 0 1 0-3.5 0v1.16A4 4 0 1 1 14 6M9.47 17.78a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V5.75a.75.75 0 0 0-1.5 0v9.69l-1.22-1.22a.75.75 0 0 0-1.06 1.06z");
}
</style><path class="nuqmcbb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:swipe-down-20-filled"} {...others} />);
}

export default Component;
