import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7oitngpi.css';
import '../../css/h/ho72t4bwy.css';
import '../../css/c/cdzff5bms.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="t7oitngpi"/><path clip-rule="evenodd" class="ho72t4bwy"/><path class="cdzff5bms"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:hamburger-off"} {...others} />);
}

export default Component;
