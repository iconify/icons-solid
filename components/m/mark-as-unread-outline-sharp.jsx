import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ssui2xble {
  fill: currentColor;
  d: path("M2 17V6.25L10.5 2l9.8 5h-4.375L10.5 4.25L4 7.475V17zm3 4V8h17v13zm8.5-5.65L7 12v7h13v-7zm0-2L20 10H7zM20 10H7z");
}
</style><path class="ssui2xble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mark-as-unread-outline-sharp"} {...others} />);
}

export default Component;
