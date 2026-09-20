import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mmow40x-m {
  fill: currentColor;
  d: path("M8 16.5h8l-4-4zM5 8h14V5H5zm0 11h14v-9H5zM5 8V5zM3 21V3h18v18z");
}
</style><path class="mmow40x-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:top-panel-close-outline-sharp"} {...others} />);
}

export default Component;
