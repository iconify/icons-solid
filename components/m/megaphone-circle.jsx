import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/w/w0s-unb8i.css';
import '../../css/e/eigasz6xa.css';
import '../../css/m/m36z1ybfl.css';
import '../../css/o/og_9s5hcc.css';
import '../../css/y/ye8vzjeiw.css';
import '../../css/e/e4_mifq4v.css';
import '../../css/o/oev4igbca.css';
import '../../css/h/h4u70ccpr.css';
import '../../css/g/gtccdwtex.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="w0s-unb8i"/><path clip-rule="evenodd" class="eigasz6xa"/><path class="m36z1ybfl"/><path clip-rule="evenodd" class="og_9s5hcc"/><path class="ye8vzjeiw"/><path clip-rule="evenodd" class="e4_mifq4v"/></g><path clip-rule="evenodd" class="oev4igbca"/><path clip-rule="evenodd" class="h4u70ccpr"/><path clip-rule="evenodd" class="gtccdwtex"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:megaphone-circle"} {...others} />);
}

export default Component;
