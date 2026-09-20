import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/m/mumkobb6b.css';
import '../../css/g/ga_pg-jpw.css';
import '../../css/g/gywovybmh.css';
import '../../css/w/wlbrr6b4t.css';
import '../../css/y/y11bnzbpr.css';
import '../../css/l/lkxnz78vu.css';
import '../../css/f/flh-iisbq.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="mumkobb6b"/><path class="ga_pg-jpw"/><path class="gywovybmh"/><path class="wlbrr6b4t"/><path class="y11bnzbpr"/><path class="lkxnz78vu"/><path class="flh-iisbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:earpod-connected"} {...others} />);
}

export default Component;
