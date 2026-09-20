import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/pwbufu0tn.css';
import '../../css/r/r2x23jbua.css';
import '../../css/e/e9ikq1fsl.css';
import '../../css/o/oekovybdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="pwbufu0tn"/><path class="r2x23jbua"/><path class="e9ikq1fsl"/><path class="oekovybdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:virtual-reality"} {...others} />);
}

export default Component;
