import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zz_qntbxb.css';
import '../../css/j/jh9foyc5c.css';
import '../../css/j/jtti8bn6v.css';
import '../../css/t/tnwts_9gl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zz_qntbxb"/><path class="jh9foyc5c"/><path class="jtti8bn6v"/><path class="tnwts_9gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-down-minimalistic-broken"} {...others} />);
}

export default Component;
