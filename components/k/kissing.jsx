import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tl99pgbsq.css';
import '../../css/p/p2x89j7kn.css';
import '../../css/x/x8b6-xbjm.css';
import '../../css/j/jukgf_zmf.css';
import '../../css/k/kmq3_ccou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="tl99pgbsq"/><path class="p2x89j7kn"/><path class="x8b6-xbjm"/><path class="jukgf_zmf"/><path class="kmq3_ccou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:kissing"} {...others} />);
}

export default Component;
