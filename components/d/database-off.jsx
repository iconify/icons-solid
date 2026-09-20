import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/og6txhb6o.css';
import '../../css/j/jhagzvpel.css';
import '../../css/s/s1v0e0b6o.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="og6txhb6o"/><path clip-rule="evenodd" class="jhagzvpel"/><path clip-rule="evenodd" class="s1v0e0b6o"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:database-off"} {...others} />);
}

export default Component;
