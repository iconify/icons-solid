import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ues5j_aln.css';
import '../../css/z/zbcptha7u.css';
import '../../css/q/qcd7zjbog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ues5j_aln"/><path class="zbcptha7u"/><path class="qcd7zjbog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-maximize"} {...others} />);
}

export default Component;
