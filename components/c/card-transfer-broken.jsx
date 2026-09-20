import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z94t_73gm.css';
import '../../css/d/dqoud86nz.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/e/ehgcfqbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z94t_73gm"/><path class="dqoud86nz"/><path class="ktpncgb0v"/><path class="ehgcfqbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-transfer-broken"} {...others} />);
}

export default Component;
