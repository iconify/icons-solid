import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_lggdbfm.css';
import '../../css/b/bd36w5uvt.css';
import '../../css/h/h31wref5t.css';
import '../../css/s/sh_j4paiu.css';
import '../../css/b/b3sjmcchl.css';
import '../../css/y/yf1vxjayg.css';
import '../../css/a/awwv1nb1y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="j_lggdbfm"/><path class="bd36w5uvt"/><path class="h31wref5t"/><path class="sh_j4paiu"/><path clip-rule="evenodd" class="b3sjmcchl"/><path class="yf1vxjayg"/><path class="awwv1nb1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:ufo-duo"} {...others} />);
}

export default Component;
