import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.em5pgnb6h {
  fill: currentColor;
  d: path("M5.374 7.113A4.25 4.25 0 0 1 9.47 4h13.06a4.25 4.25 0 0 1 4.096 3.113l3.22 11.588c.738 2.664-1.265 5.299-4.03 5.299H6.183c-2.765 0-4.768-2.635-4.028-5.299zM8 26a1 1 0 1 0 0 2h16.002a1 1 0 1 0 0-2z");
}
</style><path class="em5pgnb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:device-meeting-room-32-filled"} {...others} />);
}

export default Component;
