import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a9vkqabok.css';
import '../../css/r/r4509t42k.css';
import '../../css/s/sq7vmcbgj.css';
import '../../css/k/kv-2gl8_o.css';
import '../../css/n/n_1xux8hh.css';
import '../../css/h/hhkqdwbzq.css';
import '../../css/e/ekelfkbhq.css';
import '../../css/d/dt183mbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="a9vkqabok wm-shadow"/><path class="r4509t42k"/><path class="sq7vmcbgj"/><path class="kv-2gl8_o"/><path class="n_1xux8hh"/><path class="hhkqdwbzq"/><path class="ekelfkbhq wm-shine"/><path class="dt183mbmv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:scan-search"} {...others} />);
}

export default Component;
