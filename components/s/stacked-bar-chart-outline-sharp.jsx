import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h3--6vbwq {
  fill: currentColor;
  d: path("M4 20V9h4v11zM4 8V4h4v4zm6 12v-8h4v8zm0-9V7h4v4zm6 9v-5h4v5zm0-6v-4h4v4z");
}
</style><path class="h3--6vbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stacked-bar-chart-outline-sharp"} {...others} />);
}

export default Component;
