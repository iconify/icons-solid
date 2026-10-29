import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fo4x2o_9l.css';
import '../../css/t/tpe0mhbvy.css';
import '../../css/g/gyu5sx5mi.css';
import '../../css/h/hep4d8tqz.css';
import '../../css/l/loaz1bb4v.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fo4x2o_9l wm-shadow"/><path class="tpe0mhbvy"/><path class="gyu5sx5mi"/><path class="hep4d8tqz"/><path class="loaz1bb4v wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:corner-down-right"} {...others} />);
}

export default Component;
