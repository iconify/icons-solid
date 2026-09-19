import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ostf54c4d.css';
import '../../css/q/q3scphbpz.css';
import '../../css/s/svkdsl3mh.css';
import '../../css/s/s7ta0cb_j.css';
import '../../css/n/n3bnxxcjj.css';
import '../../css/d/dbuo1sy4s.css';
import '../../css/d/d4xmk-bmi.css';
import '../../css/j/jxatxrpgp.css';
import '../../css/t/tfc_nnbic.css';
import '../../css/u/uhmbncb8x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ostf54c4d"/><path class="q3scphbpz"/><path class="svkdsl3mh"/><path class="s7ta0cb_j"/><path class="n3bnxxcjj"/><path class="dbuo1sy4s"/><path clip-rule="evenodd" class="d4xmk-bmi"/><path class="jxatxrpgp"/><path class="tfc_nnbic"/><path class="uhmbncb8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:brightness"} {...others} />);
}

export default Component;
