import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zzwkrdbkt.css';
import '../../css/o/op2j7xbfi.css';
import '../../css/p/ps_vgzj8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zzwkrdbkt"/><path class="op2j7xbfi wm-a"/><path class="ps_vgzj8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:car"} {...others} />);
}

export default Component;
