import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cs_k-wbnb.css';
import '../../css/m/m5nommbhz.css';
import '../../css/i/ia2l_ubbl.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="cs_k-wbnb"/><path class="m5nommbhz"/><path class="ia2l_ubbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:bench-press"} {...others} />);
}

export default Component;
