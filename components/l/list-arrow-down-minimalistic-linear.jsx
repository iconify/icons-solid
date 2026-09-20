import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xa_506f5h.css';
import '../../css/z/zz_qntbxb.css';
import '../../css/j/jh9foyc5c.css';
import '../../css/j/jtti8bn6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xa_506f5h"/><path class="zz_qntbxb"/><path class="jh9foyc5c"/><path class="jtti8bn6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-down-minimalistic-linear"} {...others} />);
}

export default Component;
