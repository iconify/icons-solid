import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/q/qbeaudb8h.css';
import '../../css/g/g80rf7b8i.css';
import '../../css/t/tsu3ypo6o.css';
import '../../css/y/y6dum9mni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="qbeaudb8h"/><path class="g80rf7b8i"/><path class="tsu3ypo6o"/><path class="y6dum9mni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-minimalistic-broken"} {...others} />);
}

export default Component;
