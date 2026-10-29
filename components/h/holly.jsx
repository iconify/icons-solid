import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c09zodbrh.css';
import '../../css/a/a6a5f6btz.css';
import '../../css/o/or68wubdo.css';
import '../../css/p/phfbvcbsh.css';
import '../../css/k/k11ed5bsr.css';
import '../../css/y/y_zzz-xtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="c09zodbrh wm-shadow"/><path class="a6a5f6btz"/><path class="or68wubdo"/><path class="phfbvcbsh"/><path class="k11ed5bsr"/><path class="wm-deco y_zzz-xtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:holly"} {...others} />);
}

export default Component;
