import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d9lhgwxfc.css';
import '../../css/p/pfrm_qb2n.css';
import '../../css/x/xc8r03b_r.css';
import '../../css/c/cnght61ed.css';
import '../../css/g/gfjkmibal.css';
import '../../css/q/q42_0mbfk.css';
import '../../css/a/asa65qinq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="d9lhgwxfc wm-shadow"/><path class="pfrm_qb2n"/><path class="xc8r03b_r"/><path class="cnght61ed"/><path class="gfjkmibal"/><path class="q42_0mbfk wm-shine"/><path class="asa65qinq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:user"} {...others} />);
}

export default Component;
