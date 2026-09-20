import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/h/hn-as6b7m.css';
import '../../css/s/sgl4o34ri.css';
import '../../css/o/o4t58_bxy.css';
import '../../css/x/x5rv4lbte.css';
import '../../css/b/b3mln6qlf.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g transform="translate(3 3)" class="xyjtgccot"><rect class="hn-as6b7m"/><path clip-rule="evenodd" class="sgl4o34ri"/></g><path class="o4t58_bxy"/><path class="x5rv4lbte"/><path clip-rule="evenodd" class="b3mln6qlf"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:trash-circle-off"} {...others} />);
}

export default Component;
