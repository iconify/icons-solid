import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/p_ihmybbv.css';
import '../../css/l/lbla_23cn.css';
import '../../css/m/mgxcb8y_q.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="p_ihmybbv"/><path class="lbla_23cn"/><path class="mgxcb8y_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:unlock-1"} {...others} />);
}

export default Component;
