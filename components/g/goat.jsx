import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amxpew0mr.css';
import '../../css/e/eqjfspbja.css';
import '../../css/s/sms_g5bxs.css';
import '../../css/y/yqz8b778s.css';
import '../../css/n/nnorh4bnz.css';
import '../../css/n/npcoi3bpu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="amxpew0mr"/><path class="eqjfspbja"/><path class="sms_g5bxs"/><path class="yqz8b778s"/><path class="nnorh4bnz"/><path class="npcoi3bpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:goat"} {...others} />);
}

export default Component;
