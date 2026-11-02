import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hn6cj0vlc {
  fill: currentColor;
  d: path("M7 2h8v11.586L9.707 8.293a1.36 1.36 0 0 0-1.186-.382C7.572 8.072 7 9.102 7 10v12a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m10 0a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H9V10.414l5.293 5.293c.31.311.752.456 1.186.382C16.428 15.928 17 14.898 17 14Z");
}
</style><path class="hn6cj0vlc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:nfc-fill-round"} {...others} />);
}

export default Component;
