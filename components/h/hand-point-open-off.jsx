import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxwfrybwm.css';
import '../../css/c/c91zhyswy.css';
import '../../css/x/x1gv48b7s.css';
import '../../css/y/yeg8nfh6o.css';
import '../../css/l/lt4-_jpeu.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hxwfrybwm"/><path clip-rule="evenodd" class="c91zhyswy"/><path clip-rule="evenodd" class="x1gv48b7s"/><path clip-rule="evenodd" class="yeg8nfh6o"/><path clip-rule="evenodd" class="lt4-_jpeu"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:hand-point-open-off"} {...others} />);
}

export default Component;
