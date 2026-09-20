import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/h/hult7ccan.css';
import '../../css/y/y3dl88bnk.css';
import '../../css/e/eua_r7b6b.css';
import '../../css/p/pbxlgxbxk.css';
import '../../css/i/i_c_77y-g.css';
import '../../css/o/o68-jt6cs.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="hult7ccan"/><path class="y3dl88bnk"/><path class="eua_r7b6b"/><path class="pbxlgxbxk"/><path class="i_c_77y-g"/><path class="o68-jt6cs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:solar-power-battery"} {...others} />);
}

export default Component;
