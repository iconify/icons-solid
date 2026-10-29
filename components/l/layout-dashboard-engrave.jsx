import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w4dem-b-z.css';
import '../../css/a/aogbohb-z.css';
import '../../css/o/ow8ez-lyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w4dem-b-z"/><path class="aogbohb-z wm-shadow"/><path class="ow8ez-lyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layout-dashboard-engrave"} {...others} />);
}

export default Component;
