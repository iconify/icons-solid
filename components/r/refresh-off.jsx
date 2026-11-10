import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xq7yvcc_w.css';
import '../../css/q/q_q2ilbht.css';
import '../../css/y/ynsukob-u.css';
import '../../css/o/onsuoeb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xq7yvcc_w"/><circle class="q_q2ilbht"/><path class="ynsukob-u"/><path class="onsuoeb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh-off"} {...others} />);
}

export default Component;
