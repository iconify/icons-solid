import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ylwkqccqu.css';
import '../../css/h/hjex35bnt.css';
import '../../css/q/q-l2enbrn.css';
import '../../css/f/f68dwcljm.css';
import '../../css/p/p8j032byz.css';
import '../../css/l/lnqg4qybz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow ylwkqccqu"/><path class="hjex35bnt"/><path class="q-l2enbrn"/><path class="f68dwcljm"/><path class="p8j032byz"/><path class="lnqg4qybz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pickaxe"} {...others} />);
}

export default Component;
