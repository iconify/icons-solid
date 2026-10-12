import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/k/kwb-aacbo.css';
import '../../css/q/qydloy-xb.css';
import '../../css/x/xepxifk7q.css';
import '../../css/g/gaa-qsbww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="kwb-aacbo"/><rect class="qydloy-xb"/><path class="xepxifk7q"/><path class="gaa-qsbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-lock"} {...others} />);
}

export default Component;
