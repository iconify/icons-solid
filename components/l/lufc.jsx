import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slqv_dhqf.css';
import '../../css/k/ksgya3_qm.css';
import '../../css/d/dr2-v9bwc.css';
import '../../css/o/ob-_i1-0v.css';
import '../../css/f/f_dca-cey.css';
import '../../css/z/zj47flp1s.css';
import '../../css/u/utg5phbpu.css';
import '../../css/a/a14uykieb.css';
import '../../css/g/gm7gb9bqb.css';
import '../../css/a/aj7j6xbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="slqv_dhqf"/><path class="ksgya3_qm"/><path class="dr2-v9bwc"/><path class="ob-_i1-0v"/><path class="f_dca-cey"/><path class="zj47flp1s"/><path clip-rule="evenodd" class="utg5phbpu"/><path class="a14uykieb"/><path clip-rule="evenodd" class="gm7gb9bqb"/><path class="aj7j6xbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lufc"} {...others} />);
}

export default Component;
