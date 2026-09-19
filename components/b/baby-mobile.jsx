import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pl4zx0qqo.css';
import '../../css/p/pe_cx-4yy.css';
import '../../css/r/ra15gvj9n.css';
import '../../css/i/iazekuytt.css';
import '../../css/l/l2x9dv0pz.css';
import '../../css/n/nr231yyqr.css';
import '../../css/p/psegl0mfr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="pl4zx0qqo"/><path class="pe_cx-4yy"/><path class="ra15gvj9n"/><circle class="iazekuytt"/><path class="l2x9dv0pz"/><path class="nr231yyqr"/><path class="psegl0mfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:baby-mobile"} {...others} />);
}

export default Component;
