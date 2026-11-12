import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.prm9m67lf {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-5v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm6 6a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-3h-1a1 1 0 0 1 0-2Zm1 13a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0Zm-12-2v1h3a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0");
}
</style><path class="prm9m67lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:boolean-subtract-fill-sharp"} {...others} />);
}

export default Component;
