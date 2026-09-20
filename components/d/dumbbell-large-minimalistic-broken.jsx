import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fjpkh_y_d.css';
import '../../css/x/xm78w9bdm.css';
import '../../css/t/tfw8uqbyb.css';
import '../../css/t/t2m3jlpnn.css';
import '../../css/v/vte9i7bqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fjpkh_y_d"/><path class="xm78w9bdm"/><path class="tfw8uqbyb"/><path class="t2m3jlpnn"/><path class="vte9i7bqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-minimalistic-broken"} {...others} />);
}

export default Component;
