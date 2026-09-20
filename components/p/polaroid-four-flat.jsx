import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d3-ucqb-x.css';
import '../../css/s/s439jortk.css';
import '../../css/y/yyhzg9z6p.css';
import '../../css/w/w1ds_etxo.css';
import '../../css/p/pmywhybto.css';
import '../../css/q/qt7pskbva.css';
import '../../css/b/bgru1tbkm.css';
import '../../css/l/lkw0dtnim.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="d3-ucqb-x"/><path class="s439jortk"/><path class="yyhzg9z6p"/><path class="w1ds_etxo"/><path class="pmywhybto"/><path class="qt7pskbva"/><path class="bgru1tbkm"/><path class="lkw0dtnim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:polaroid-four-flat"} {...others} />);
}

export default Component;
