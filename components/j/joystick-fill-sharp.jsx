import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anqgv2bxd {
  fill: currentColor;
  d: path("M13 9.874V14h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3v-1a1 1 0 0 1 2 0v1h3V9.874a4 4 0 1 1 2 0");
}
</style><path class="anqgv2bxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:joystick-fill-sharp"} {...others} />);
}

export default Component;
