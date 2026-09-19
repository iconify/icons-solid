import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8x83qxqh.css';
import '../../css/n/nv03s4baq.css';
import '../../css/v/v3eljxu7t.css';
import '../../css/t/t--i3vd_t.css';
import '../../css/l/lhl5gzgha.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="u8x83qxqh"/><path clip-rule="evenodd" class="nv03s4baq"/><path class="v3eljxu7t"/><path clip-rule="evenodd" class="t--i3vd_t"/><path class="lhl5gzgha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pregnant-2426w"} {...others} />);
}

export default Component;
