import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dmv7jnbbr.css';
import '../../css/b/b4llwcckj.css';
import '../../css/r/rq3jcfbyl.css';
import '../../css/b/b6wecy-ij.css';
import '../../css/e/elxa067pa.css';
import '../../css/f/fjyt_acaj.css';
import '../../css/i/i_qmc5bkr.css';
import '../../css/e/enkkjcbyu.css';
import '../../css/n/nva0mpbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="dmv7jnbbr wm-shadow"/><path class="b4llwcckj"/><path class="rq3jcfbyl"/><path class="b6wecy-ij"/><path class="elxa067pa wm-shine"/><path class="fjyt_acaj wm-s"/><path class="i_qmc5bkr wm-s"/><path class="enkkjcbyu wm-s"/><path class="nva0mpbqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:phone-incoming"} {...others} />);
}

export default Component;
