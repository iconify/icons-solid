import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/n5mptvbin.css';
import '../../css/p/p-fqadbpj.css';
import '../../css/p/p2uf0lbbs.css';
import '../../css/l/l7ntalb5n.css';
import '../../css/i/i0hhl7zeu.css';
import '../../css/q/q_yw93bsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="n5mptvbin wm-shadow"/><path class="p-fqadbpj"/><path class="p2uf0lbbs"/><path class="l7ntalb5n"/><path class="i0hhl7zeu wm-shine"/><path class="q_yw93bsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:rotate-ccw"} {...others} />);
}

export default Component;
