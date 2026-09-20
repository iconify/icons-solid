import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h_3sjsb4f.css';
import '../../css/n/n9_wpcd_e.css';
import '../../css/y/yjfg1wbnr.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="h_3sjsb4f"/><path class="n9_wpcd_e"/><path class="yjfg1wbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:debit-purchase"} {...others} />);
}

export default Component;
