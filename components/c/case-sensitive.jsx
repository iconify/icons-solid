import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zc_bgg4ss.css';
import '../../css/v/vdez3x3ob.css';
import '../../css/e/elsp8ebhy.css';
import '../../css/v/v2ag8bcvk.css';
import '../../css/v/vxd-d_bwh.css';
import '../../css/n/n9qva2bow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zc_bgg4ss"/><path class="vdez3x3ob"/><path class="elsp8ebhy"/><path class="v2ag8bcvk"/><path class="vxd-d_bwh wm-shine"/><path class="n9qva2bow wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:case-sensitive"} {...others} />);
}

export default Component;
