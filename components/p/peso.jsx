import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/p/pp42kvrrf.css';
import '../../css/l/loszyvdwl.css';
import '../../css/v/v_bbw2bix.css';
import '../../css/e/e3r28t5tz.css';
import '../../css/v/vv-7p9b_v.css';
import '../../css/z/z9qnrxw9f.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="pp42kvrrf"/><path class="loszyvdwl"/><path class="v_bbw2bix"/></g><path class="e3r28t5tz"/><path class="vv-7p9b_v"/><path class="z9qnrxw9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:peso"} {...others} />);
}

export default Component;
