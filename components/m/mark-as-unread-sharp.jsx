import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l20cockhd {
  fill: currentColor;
  d: path("M2 17V6.25L10.5 2l9.8 5h-4.375L10.5 4.25L4 7.475V17zm3 4V8h17v13zm8.5-5.65L20 12v-2l-6.5 3.35L7 10v2z");
}
</style><path class="l20cockhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mark-as-unread-sharp"} {...others} />);
}

export default Component;
