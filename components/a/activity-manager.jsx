import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.js8pxebdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h15.857v15.857H5.5zm19.07 7.928l10-10l10 10l-10 10zM5.5 26.643h15.857V42.5H5.5zm21.143 0H42.5V42.5H26.643z");
}
</style><path class="js8pxebdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:activity-manager"} {...others} />);
}

export default Component;
