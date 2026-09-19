import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dpr6dv8_s.css';
import '../../css/c/c4ew_ccan.css';
import '../../css/n/nkqhc7b3e.css';
import '../../css/t/t6i9m3fze.css';
import '../../css/x/x9u1sytwj.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dpr6dv8_s"/><path class="c4ew_ccan"/><path class="nkqhc7b3e"/><path class="t6i9m3fze"/><path class="x9u1sytwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:imm2x-outline"} {...others} />);
}

export default Component;
