import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sfk2p-bgk.css';
import '../../css/x/xze61rb_e.css';
import '../../css/n/n6tqrok-y.css';
import '../../css/x/xiotyqb5w.css';
import '../../css/k/kl2r2zzqn.css';
import '../../css/t/tv5yr4beu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sfk2p-bgk wm-shadow"/><path class="xze61rb_e"/><path class="n6tqrok-y"/><path class="xiotyqb5w"/><path class="kl2r2zzqn wm-shine"/><path class="tv5yr4beu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:baby-bottle"} {...others} />);
}

export default Component;
