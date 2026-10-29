import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g2mv2kb9g.css';
import '../../css/n/n97utxnno.css';
import '../../css/t/tqjxo4v_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g2mv2kb9g"/><path class="n97utxnno"/><path class="tqjxo4v_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:droplet-sketch"} {...others} />);
}

export default Component;
