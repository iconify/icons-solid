import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/trwcrqbbe.css';
import '../../css/p/p3e01pvhh.css';
import '../../css/s/siply23cc.css';
import '../../css/v/vmddvxslr.css';
import '../../css/g/gsli71_3i.css';
import '../../css/c/ck64aebbz.css';
import '../../css/o/o55xlzqya.css';
import '../../css/j/j01fr2brz.css';
import '../../css/i/ivstsqbgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="trwcrqbbe wm-shadow"/><path class="p3e01pvhh"/><path class="siply23cc"/><path class="vmddvxslr"/><path class="gsli71_3i"/><path class="ck64aebbz"/><path class="o55xlzqya"/><path class="j01fr2brz wm-shine"/><path class="ivstsqbgb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:git-branch"} {...others} />);
}

export default Component;
