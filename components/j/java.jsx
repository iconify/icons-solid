import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wyu27vjiy.css';
import '../../css/f/fhniiwjsf.css';
import '../../css/h/ht6h7d_qp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="wyu27vjiy"/><path class="fhniiwjsf"/><path class="ht6h7d_qp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:java"} {...others} />);
}

export default Component;
