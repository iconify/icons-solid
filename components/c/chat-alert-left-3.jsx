import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/io9yp4byx.css';
import '../../css/l/l_bdbebhx.css';
import '../../css/g/g7pln_tin.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="io9yp4byx"/><path class="l_bdbebhx"/><path class="g7pln_tin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:chat-alert-left-3"} {...others} />);
}

export default Component;
