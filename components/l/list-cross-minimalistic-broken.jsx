import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tnwts_9gl.css';
import '../../css/f/f8edcu39k.css';
import '../../css/l/l2mcogbbt.css';
import '../../css/h/hdyny9bio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tnwts_9gl"/><path class="f8edcu39k"/><path class="l2mcogbbt"/><path class="hdyny9bio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-cross-minimalistic-broken"} {...others} />);
}

export default Component;
