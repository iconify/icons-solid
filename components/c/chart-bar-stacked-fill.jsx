import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hcartvbks {
  fill: currentColor;
  d: path("M15 6v5a1 1 0 0 1-1 1h-4a.997.997 0 0 1-1-1V6a3 3 0 1 1 6 0m7 4v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3a3 3 0 0 1 6 0M2 14v-1a3 3 0 0 1 6 0v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m13 6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm6-5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1ZM2 17a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}
</style><path class="hcartvbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-bar-stacked-fill"} {...others} />);
}

export default Component;
