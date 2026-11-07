import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvtd-1bui.css';
import '../../css/i/i3kue5j-z.css';
import '../../css/w/wlfc-cbhd.css';
import '../../css/c/chi0adchb.css';
import '../../css/s/sq3zltb-a.css';
import '../../css/w/w2tq49b4c.css';
import '../../css/h/hy8pa9b9z.css';
import '../../css/u/u6ruwxb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wvtd-1bui"/><path class="i3kue5j-z"/><path class="wlfc-cbhd"/><path class="chi0adchb"/><path class="sq3zltb-a"/><path class="w2tq49b4c"/><path class="hy8pa9b9z"/><path class="u6ruwxb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-bold-duotone"} {...others} />);
}

export default Component;
