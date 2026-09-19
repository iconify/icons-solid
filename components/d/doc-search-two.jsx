import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh43g_6pb.css';
import '../../css/k/kjjtm5q3v.css';
import '../../css/x/xfru9th-s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vh43g_6pb"/><path class="kjjtm5q3v"/><path class="xfru9th-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:doc-search-two"} {...others} />);
}

export default Component;
