import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c7kxytaax.css';
import '../../css/u/uo4vcnbbv.css';
import '../../css/p/plr3lubsa.css';
import '../../css/g/gndbkybbl.css';
import '../../css/t/tgq2f_kxk.css';
import '../../css/p/p6z00zb6f.css';
import '../../css/o/odhji6bku.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="c7kxytaax wm-shadow"/><path class="uo4vcnbbv"/><path class="plr3lubsa"/><path class="gndbkybbl"/><path class="tgq2f_kxk"/><path class="p6z00zb6f"/><path class="odhji6bku wm-shine"/><path class="ug799plhe wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:wallet-cards"} {...others} />);
}

export default Component;
