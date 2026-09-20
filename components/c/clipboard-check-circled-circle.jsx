import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/l/lzuxagbpv.css';
import '../../css/f/fk8i69g9n.css';
import '../../css/x/x3jzxjblo.css';
import '../../css/e/ey2r02nhy.css';
import '../../css/k/kunsb_bgc.css';
import '../../css/t/tx27g4bbc.css';
import '../../css/g/g9geo6v2w.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path clip-rule="evenodd" class="lzuxagbpv"/><path class="fk8i69g9n"/><path class="x3jzxjblo"/></g><path clip-rule="evenodd" class="ey2r02nhy"/><path clip-rule="evenodd" class="kunsb_bgc"/><path clip-rule="evenodd" class="tx27g4bbc"/><path clip-rule="evenodd" class="g9geo6v2w"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:clipboard-check-circled-circle"} {...others} />);
}

export default Component;
