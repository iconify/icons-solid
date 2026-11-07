import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cit_55o-r.css';
import '../../css/t/t1_7z3t8t.css';
import '../../css/b/b91a24b_q.css';
import '../../css/l/lxnzn9nmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cit_55o-r"/><path class="t1_7z3t8t"/><path class="b91a24b_q"/><path class="lxnzn9nmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:send-twice-square-line-duotone"} {...others} />);
}

export default Component;
