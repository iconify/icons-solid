import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qbphumahd.css';
import '../../css/h/h1pho9l1k.css';
import '../../css/g/gn0m7t3rf.css';
import '../../css/j/j-dbpmb7p.css';
import '../../css/c/clsq4v3-l.css';
import '../../css/p/psi9bvboe.css';
import '../../css/g/gcv74wbzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qbphumahd"/><path class="h1pho9l1k"/><path class="gn0m7t3rf wm-shine"/><path class="j-dbpmb7p wm-k"/><path class="clsq4v3-l wm-a"/><path class="psi9bvboe"/><path class="gcv74wbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bread"} {...others} />);
}

export default Component;
