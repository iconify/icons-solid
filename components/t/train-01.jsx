import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pkkrpvzse.css';
import '../../css/p/pvnxvnhrw.css';
import '../../css/q/qqm9ydb9o.css';
import '../../css/x/xvzcmmbio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pkkrpvzse"/><path class="pvnxvnhrw"/><path class="qqm9ydb9o"/><path class="xvzcmmbio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:train-01"} {...others} />);
}

export default Component;
