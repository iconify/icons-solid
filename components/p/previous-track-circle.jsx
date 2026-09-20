import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/s/sv75tacst.css';
import '../../css/n/nt_b3xs4z.css';
import '../../css/f/fiiq77bpo.css';
import '../../css/q/qg2g1sbhc.css';
import '../../css/y/ye_sokg1c.css';
import '../../css/k/kqijdyo9f.css';
import '../../css/u/uhwaexb9v.css';
import '../../css/y/yz3i-iodf.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="sv75tacst"/><path clip-rule="evenodd" class="nt_b3xs4z"/><path class="fiiq77bpo"/><path clip-rule="evenodd" class="qg2g1sbhc"/><path clip-rule="evenodd" class="ye_sokg1c"/></g><path clip-rule="evenodd" class="kqijdyo9f"/><path clip-rule="evenodd" class="uhwaexb9v"/><path clip-rule="evenodd" class="yz3i-iodf"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:previous-track-circle"} {...others} />);
}

export default Component;
