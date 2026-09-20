import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m_dn-5bgg.css';
import '../../css/i/i06p4_b4q.css';
import '../../css/p/pxt9w6gls.css';
import '../../css/g/gflirmbze.css';
import '../../css/x/xjpsjs4db.css';
import '../../css/v/vo_bpkbcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m_dn-5bgg"/><path class="i06p4_b4q"/><path class="pxt9w6gls"/><path class="gflirmbze"/><path class="xjpsjs4db"/><path class="vo_bpkbcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cd-disc"} {...others} />);
}

export default Component;
