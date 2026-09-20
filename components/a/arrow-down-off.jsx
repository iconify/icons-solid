import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qsl0o10jl.css';
import '../../css/p/p2gyusbll.css';
import '../../css/f/fvtcp1b8t.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qsl0o10jl"/><path clip-rule="evenodd" class="p2gyusbll"/><path clip-rule="evenodd" class="fvtcp1b8t"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:arrow-down-off"} {...others} />);
}

export default Component;
