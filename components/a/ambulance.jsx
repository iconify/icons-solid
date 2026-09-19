import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/m/m_k-ybbbi.css';
import '../../css/y/y3not47io.css';
import '../../css/d/dkqenlbxo.css';
import '../../css/r/rsct1ib4g.css';
import '../../css/i/i4ed37b0o.css';
import '../../css/h/hygmayb9h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="m_k-ybbbi"/><path class="y3not47io"/><path class="dkqenlbxo"/><path class="rsct1ib4g"/><circle class="i4ed37b0o"/><circle class="hygmayb9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ambulance"} {...others} />);
}

export default Component;
