import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ifmk6bcek.css';
import '../../css/o/ob0rmtb4q.css';
import '../../css/u/u6_83onsn.css';
import '../../css/s/sju5n-beu.css';
import '../../css/h/h6c-5nbvi.css';
import '../../css/x/xipm9hb2l.css';
import '../../css/i/i-njqfbxo.css';
import '../../css/o/ocn8myoqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ifmk6bcek wm-shadow"/><path class="ob0rmtb4q"/><path class="u6_83onsn"/><path class="sju5n-beu"/><path class="h6c-5nbvi"/><path class="wm-shine xipm9hb2l"/><path class="i-njqfbxo wm-deco"/><path class="ocn8myoqn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:airplay"} {...others} />);
}

export default Component;
