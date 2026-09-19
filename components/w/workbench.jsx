import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/n/nnw03yyud.css';
import '../../css/j/jhy412beq.css';
import '../../css/m/mjml-1rkx.css';
import '../../css/q/qg722qjwj.css';
import '../../css/l/ldcsqcbde.css';
import '../../css/w/wxoxzgjis.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="nnw03yyud"/><path class="jhy412beq"/><path class="mjml-1rkx"/><path class="qg722qjwj"/><path class="ldcsqcbde"/><path class="wxoxzgjis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:workbench"} {...others} />);
}

export default Component;
