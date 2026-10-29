import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hgfy4ei1s.css';
import '../../css/o/ogniu1b8g.css';
import '../../css/z/zvffs-44o.css';
import '../../css/z/z-dophb6a.css';
import '../../css/a/ac93v_hpm.css';
import '../../css/h/hd755v8yi.css';
import '../../css/m/mzvs17hje.css';
import '../../css/n/nym4qhbni.css';
import '../../css/q/qn54fqbvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hgfy4ei1s wm-shadow"/><path class="ogniu1b8g"/><path class="zvffs-44o"/><path class="z-dophb6a"/><path class="ac93v_hpm wm-shine"/><path class="hd755v8yi wm-s"/><path class="mzvs17hje wm-s"/><path class="nym4qhbni wm-deco"/><path class="qn54fqbvi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:worried"} {...others} />);
}

export default Component;
