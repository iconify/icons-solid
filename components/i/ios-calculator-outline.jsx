import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv0-0j7rm.css';
import '../../css/q/qsz1mz4kt.css';
import '../../css/z/zh8ge4o-s.css';
import '../../css/t/tbo_5abuf.css';
import '../../css/g/ggey35bfg.css';
import '../../css/n/ntzy-i_fy.css';
import '../../css/g/gmmerkbzc.css';
import '../../css/m/m5soc0fxq.css';
import '../../css/o/olh64acie.css';
import '../../css/n/nq1be5bmw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nv0-0j7rm"/><path class="qsz1mz4kt"/><path class="zh8ge4o-s"/><path class="tbo_5abuf"/><path class="ggey35bfg"/><path class="ntzy-i_fy"/><path class="gmmerkbzc"/><path class="m5soc0fxq"/><path class="olh64acie"/><path class="nq1be5bmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-calculator-outline"} {...others} />);
}

export default Component;
