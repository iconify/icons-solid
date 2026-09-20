import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/w/wrzsu9bqa.css';
import '../../css/u/u4lwefb4s.css';
import '../../css/y/yiqioq5fn.css';
import '../../css/v/vbfb3bb6q.css';
import '../../css/x/xcinvyzvw.css';
import '../../css/i/i6ck08bjt.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="wrzsu9bqa"/><path class="u4lwefb4s"/><path class="yiqioq5fn"/><path class="vbfb3bb6q"/><path class="xcinvyzvw"/><path class="i6ck08bjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:elasticsearch-dark"} {...others} />);
}

export default Component;
