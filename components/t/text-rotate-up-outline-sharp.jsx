import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l-5bhacyb {
  fill: currentColor;
  d: path("M19 20h-2V6.8l-1.05 1.05l-1.4-1.4L18 3l3.5 3.45l-1.45 1.4L19 6.8zm-5-2.9L3 13v-2l11-4.1v1.9l-2.8.95v4.45l2.8 1zm-4.4-3.45v-3.3l-4.55 1.6v.1z");
}
</style><path class="l-5bhacyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-rotate-up-outline-sharp"} {...others} />);
}

export default Component;
