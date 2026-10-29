import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ync4q5ypy.css';
import '../../css/u/u16rdbc4x.css';
import '../../css/o/op2j7xbfi.css';
import '../../css/z/zzwkrdbkt.css';
import '../../css/p/ps_vgzj8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ync4q5ypy"/><path class="u16rdbc4x"/><path class="op2j7xbfi wm-a"/><path class="zzwkrdbkt"/><path class="ps_vgzj8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:car-duo"} {...others} />);
}

export default Component;
