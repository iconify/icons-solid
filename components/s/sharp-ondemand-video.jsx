import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mbu6i0b0w {
  fill: currentColor;
  d: path("M23 3H1v16h7v2h8v-2h6.99zm-2 14H3V5h18zm-5-6l-7 4V7z");
}
</style><path class="mbu6i0b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-ondemand-video"} {...others} />);
}

export default Component;
