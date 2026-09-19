import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e20aw1nql.css';
import '../../css/h/h_bkvkb-x.css';
import '../../css/w/wa65fi0wq.css';
import '../../css/g/g2zbie5_k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="e20aw1nql"/><path clip-rule="evenodd" class="h_bkvkb-x"/><path class="wa65fi0wq"/><path clip-rule="evenodd" class="g2zbie5_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rdt-result-pv-invalid2x-outline"} {...others} />);
}

export default Component;
