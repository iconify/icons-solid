import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gkxc7b9qm {
  fill: currentColor;
  d: path("M8 5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm6-1h-4v1h4Zm-4 16h4v-1h-4Z");
}
</style><path class="gkxc7b9qm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:smartwatch-fill-sharp"} {...others} />);
}

export default Component;
