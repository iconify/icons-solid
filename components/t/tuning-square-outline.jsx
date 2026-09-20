import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/niqwffbem.css';
import '../../css/o/obm-zcbwy.css';
import '../../css/c/cowgwlbzf.css';
import '../../css/l/l7k68z36s.css';
import '../../css/q/qr7q0gbti.css';
import '../../css/q/qwre08bte.css';
import '../../css/k/k9825nbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="niqwffbem"/><path clip-rule="evenodd" class="obm-zcbwy"/><path class="cowgwlbzf"/><path class="l7k68z36s"/><path class="qr7q0gbti"/><path class="qwre08bte"/><path clip-rule="evenodd" class="k9825nbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-square-outline"} {...others} />);
}

export default Component;
