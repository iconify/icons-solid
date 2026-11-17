import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.frwmx0ban {
  fill: currentColor;
  d: path("M3 2h18a1 1 0 0 1 0 2h-1v2H4V4H3a1 1 0 0 1 0-2m17 6v2H4V8Zm0 4v1a3 3 0 0 1-3 3h-4v.171a3 3 0 1 1-2 0V16H7a3 3 0 0 1-3-3v-1Z");
}
</style><path class="frwmx0ban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:blinds-fill-round"} {...others} />);
}

export default Component;
