import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rf_dn-bbw {
  fill: currentColor;
  d: path("M19.292 20L4 4.714L4.713 4L20 19.287zm-9.62 0L4 14.329l.714-.714l5.67 5.671z");
}
</style><path class="rf_dn-bbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:resize-window-sharp"} {...others} />);
}

export default Component;
