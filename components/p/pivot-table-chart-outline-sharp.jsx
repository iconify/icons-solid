import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p3mnhrg8j {
  fill: currentColor;
  d: path("M10 8V3h11v5zM3 21V10h5v11zM3 8V3h5v5zm10 14l-4-4l4-4l1.4 1.4l-1.55 1.6H17v-4.2l-1.6 1.6L14 13l4-4l4 4l-1.4 1.4l-1.6-1.6V19h-6.15l1.55 1.6z");
}
</style><path class="p3mnhrg8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pivot-table-chart-outline-sharp"} {...others} />);
}

export default Component;
