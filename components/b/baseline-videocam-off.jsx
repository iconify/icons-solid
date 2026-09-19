import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x7zjmnb9q {
  fill: currentColor;
  d: path("m21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18zM3.27 2L2 3.27L4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21L21 19.73z");
}
</style><path class="x7zjmnb9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-videocam-off"} {...others} />);
}

export default Component;
