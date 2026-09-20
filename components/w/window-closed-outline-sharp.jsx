import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iq73un8tz {
  fill: currentColor;
  d: path("M4 21V3h16v18zm2-10h5v-1h2v1h5V5H6zm0 8h12v-6H6zm0 0h12z");
}
</style><path class="iq73un8tz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:window-closed-outline-sharp"} {...others} />);
}

export default Component;
