import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzap2kunf.css';
import '../../css/t/tx7rqbbdn.css';
import '../../css/n/nl6cj9bpw.css';
import '../../css/g/goe0lebdb.css';
import '../../css/i/ildpvdvdb.css';
import '../../css/c/cnvacab-x.css';
import '../../css/p/pbzlmcpwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wzap2kunf"/><path class="tx7rqbbdn"/><path class="nl6cj9bpw"/><path class="goe0lebdb"/><path class="ildpvdvdb"/><path class="cnvacab-x"/><path class="pbzlmcpwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:group-refresh"} {...others} />);
}

export default Component;
