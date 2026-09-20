import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ewj5l-btq {
  fill: currentColor;
  d: path("M8 5v11h4V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1M7 9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v8.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V11a2 2 0 0 1 2-2zm0 7v-6H5a1 1 0 0 0-1 1v5zm6 0h3V8a1 1 0 0 0-1-1h-2z");
}
</style><path class="ewj5l-btq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-histogram-20-regular"} {...others} />);
}

export default Component;
