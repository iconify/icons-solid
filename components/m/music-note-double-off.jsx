import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bgbypwxxy.css';
import '../../css/m/mavie6bka.css';
import '../../css/e/e5vcnnbbh.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bgbypwxxy"/><path clip-rule="evenodd" class="mavie6bka"/><path class="e5vcnnbbh"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:music-note-double-off"} {...others} />);
}

export default Component;
