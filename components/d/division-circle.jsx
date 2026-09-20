import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/f/fyx0x013q.css';
import '../../css/u/ux9pwvqah.css';
import '../../css/x/x6tlt5s8q.css';
import '../../css/j/j-hc1kblh.css';
import '../../css/n/nqz3_8ssl.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g transform="translate(3 3)" class="xyjtgccot"><path class="fyx0x013q"/><circle class="ux9pwvqah"/><circle class="x6tlt5s8q"/></g><path class="j-hc1kblh"/><path clip-rule="evenodd" class="nqz3_8ssl"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:division-circle"} {...others} />);
}

export default Component;
