import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gjhijcc0u.css';
import '../../css/h/hfi5ulj3g.css';
import '../../css/a/a93tonc-k.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="gjhijcc0u"/><path class="hfi5ulj3g"/><path class="a93tonc-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:door-handle"} {...others} />);
}

export default Component;
