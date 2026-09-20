import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyayndb2t.css';
import '../../css/w/wxcgd_r6i.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';
import '../../css/m/m_72sd0-s.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="xyayndb2t"/><path class="wxcgd_r6i"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><path class="m_72sd0-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:regional-indicator-c"} {...others} />);
}

export default Component;
