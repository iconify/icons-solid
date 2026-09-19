import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zpe0_hbxc.css';
import '../../css/q/qt61kibtl.css';
import '../../css/z/zj_e5pb4e.css';
import '../../css/q/q8245zb2p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="zpe0_hbxc"/><path class="qt61kibtl"/><path class="zj_e5pb4e"/><path class="q8245zb2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:change"} {...others} />);
}

export default Component;
