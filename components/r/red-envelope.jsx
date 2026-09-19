import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yz34f9b6l.css';
import '../../css/p/pyat-2bcw.css';
import '../../css/q/qpw_nlblc.css';
import '../../css/u/ubs9o-b0t.css';
import '../../css/h/h0aiknbwr.css';
import '../../css/z/zwlrnobak.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="yz34f9b6l"/><path class="pyat-2bcw"/><path class="qpw_nlblc"/><path class="ubs9o-b0t"/><path class="h0aiknbwr"/><path class="zwlrnobak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:red-envelope"} {...others} />);
}

export default Component;
