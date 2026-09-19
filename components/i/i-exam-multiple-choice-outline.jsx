import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/io6dfybax.css';
import '../../css/h/h7f25f_xf.css';
import '../../css/m/mh883ubvi.css';
import '../../css/k/k7o7obbpf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="io6dfybax"/><path clip-rule="evenodd" class="h7f25f_xf"/><path class="mh883ubvi"/><path clip-rule="evenodd" class="k7o7obbpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-exam-multiple-choice-outline"} {...others} />);
}

export default Component;
