import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fshlj_btc.css';
import '../../css/b/b8emp_ehx.css';
import '../../css/z/z7ec6fb5w.css';
import '../../css/o/o0ybcvb8w.css';
import '../../css/k/kie6enxuu.css';
import '../../css/i/izlce-lcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fshlj_btc"/><path class="b8emp_ehx"/><path class="z7ec6fb5w"/><path class="o0ybcvb8w"/><path class="kie6enxuu"/><path class="izlce-lcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-receiving-droplet"} {...others} />);
}

export default Component;
