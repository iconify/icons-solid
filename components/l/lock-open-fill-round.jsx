import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kpau-274o {
  fill: currentColor;
  d: path("M7 8.099V7a5 5 0 0 1 9.33-2.5a1 1 0 0 1-1.732 1A3 3 0 0 0 9 7v1h7a5 5 0 0 1 5 5v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5v-4a5.01 5.01 0 0 1 4-4.901m3.158 6.122a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558");
}
</style><path class="kpau-274o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-open-fill-round"} {...others} />);
}

export default Component;
