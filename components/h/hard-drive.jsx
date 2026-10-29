import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wx0fvbbbg.css';
import '../../css/q/qu95adb3c.css';
import '../../css/l/l4miuhbew.css';
import '../../css/r/rc26htbgo.css';
import '../../css/l/lmfhnu9nk.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wx0fvbbbg"/><path class="qu95adb3c"/><path class="l4miuhbew"/><path class="rc26htbgo"/><path class="lmfhnu9nk wm-shine"/><path class="q_yw93bsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:hard-drive"} {...others} />);
}

export default Component;
