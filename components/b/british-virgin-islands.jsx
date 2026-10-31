import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl8x224tx.css';
import '../../css/m/m74esacog.css';
import '../../css/r/rxmw-2b3v.css';
import '../../css/r/r3l7hccgj.css';
import '../../css/o/o1qfmdvzc.css';
import '../../css/w/w-q9khbce.css';
import '../../css/n/nv4ztabcc.css';
import '../../css/o/o6rwwebbc.css';
import '../../css/u/ufzh-1jpi.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="yl8x224tx"/><path class="m74esacog"/><path class="rxmw-2b3v"/><path class="r3l7hccgj"/><path class="o1qfmdvzc"/><path class="w-q9khbce"/><path class="nv4ztabcc"/><path class="o6rwwebbc"/><path class="ufzh-1jpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:british-virgin-islands"} {...others} />);
}

export default Component;
