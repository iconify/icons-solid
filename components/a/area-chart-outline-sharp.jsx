import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jqf5aabfq {
  fill: currentColor;
  d: path("M3 20V7l4 3l5-7l5 4h4v13zm5-3l4-5.5l7 5.45V9h-2.7l-3.9-3.125l-4.95 6.95L5 11v3.6z");
}
</style><path class="jqf5aabfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:area-chart-outline-sharp"} {...others} />);
}

export default Component;
