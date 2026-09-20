import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kgxtwcbob.css';
import '../../css/l/l_e49jaqo.css';
import '../../css/d/d0metmbgq.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="kgxtwcbob"/><path class="l_e49jaqo"/><path class="d0metmbgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:car-allert"} {...others} />);
}

export default Component;
