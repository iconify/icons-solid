import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo4w__bep {
  fill: currentColor;
  d: path("m5 9.5l7-5.27l7 5.27zM5 20v-4.25h8.5V20zm9.5 0v-4.25H19V20zM5 14.75V10.5h4.5v4.25zm5.5 0V10.5H19v4.25z");
}
</style><path class="bo4w__bep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:nest-multi-room-sharp"} {...others} />);
}

export default Component;
