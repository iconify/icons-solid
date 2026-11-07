import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpocmbbab.css';
import '../../css/i/i3sxkkaqb.css';
import '../../css/y/yvgtcy7ig.css';
import '../../css/f/ft4ucmq2j.css';
import '../../css/h/hxvt928-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpocmbbab"/><path class="i3sxkkaqb"/><path class="yvgtcy7ig"/><path class="ft4ucmq2j"/><path class="hxvt928-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:printer-2-bold-duotone"} {...others} />);
}

export default Component;
