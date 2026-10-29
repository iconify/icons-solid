import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nvtz9nbzn.css';
import '../../css/j/jfnsghb_a.css';
import '../../css/c/crvu3-e_b.css';
import '../../css/v/vioacabca.css';
import '../../css/m/m2htiqb6n.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="nvtz9nbzn wm-shadow"/><path class="jfnsghb_a"/><path class="crvu3-e_b"/><path class="vioacabca"/><path class="m2htiqb6n wm-shine"/><path class="aexe23bqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:loader-circle"} {...others} />);
}

export default Component;
