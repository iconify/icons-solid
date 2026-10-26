import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_vbzsbjb.css';
import '../../css/a/aykchpjie.css';
import '../../css/a/a-l4vyfjm.css';
import '../../css/u/ub0zacarc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="q_vbzsbjb"/><path clip-rule="evenodd" class="aykchpjie"/><path class="a-l4vyfjm"/><path clip-rule="evenodd" class="ub0zacarc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:camera"} {...others} />);
}

export default Component;
