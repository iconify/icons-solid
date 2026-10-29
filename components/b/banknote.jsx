import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lo2k1tdyo.css';
import '../../css/c/ciodw9i1n.css';
import '../../css/m/mjt_pfbkn.css';
import '../../css/l/l8c0kkb0x.css';
import '../../css/n/nzsljnksw.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lo2k1tdyo wm-shadow"/><path class="ciodw9i1n"/><path class="mjt_pfbkn"/><path class="l8c0kkb0x"/><path class="nzsljnksw wm-shine"/><path class="aexe23bqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:banknote"} {...others} />);
}

export default Component;
