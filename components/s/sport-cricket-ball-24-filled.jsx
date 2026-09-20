import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kj2kf2u4u {
  fill: currentColor;
  d: path("M12 2c1.718 0 3.335.433 4.747 1.196a.75.75 0 0 0-.247.554v1.5a.75.75 0 0 0 1.5 0V3.999A9.99 9.99 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M5.25 15a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75m3 1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm0-4.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75m3 1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm0-4.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75m3 1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm0-4.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75m3 1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="kj2kf2u4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:sport-cricket-ball-24-filled"} {...others} />);
}

export default Component;
