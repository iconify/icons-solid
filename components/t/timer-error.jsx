import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vdwhlacjh.css';
import '../../css/l/lmgf_9bdg.css';
import '../../css/m/mm8-0qbzl.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="vdwhlacjh"/><path class="lmgf_9bdg"/><path class="mm8-0qbzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:timer-error"} {...others} />);
}

export default Component;
