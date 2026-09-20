import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h22g7_bfe.css';
import '../../css/h/hus16pvob.css';
import '../../css/s/sd60occll.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="h22g7_bfe"/><path class="hus16pvob"/><path class="sd60occll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:gas-stove"} {...others} />);
}

export default Component;
