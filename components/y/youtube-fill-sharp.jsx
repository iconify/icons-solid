import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ju1iq-4lb {
  fill: currentColor;
  d: path("M7 4h10a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 20H7a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5m8.514 7.143l-5-3A.997.997 0 0 0 9 9v6a1 1 0 0 0 1.514.857l5-3a.997.997 0 0 0 0-1.714");
}
</style><path class="ju1iq-4lb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:youtube-fill-sharp"} {...others} />);
}

export default Component;
