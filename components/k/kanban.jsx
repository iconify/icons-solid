import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/h/hgl6-d36q.css';
import '../../css/s/s-pqtzrxg.css';
import '../../css/a/atag8u_gv.css';
import '../../css/u/uk7ndnb4g.css';
import '../../css/w/wi43dxb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="hgl6-d36q"/><path class="s-pqtzrxg"/><path class="atag8u_gv wm-shine"/><path class="uk7ndnb4g wm-deco"/><path class="wi43dxb3d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:kanban"} {...others} />);
}

export default Component;
