import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/rdnh--bxy.css';
import '../../css/b/bdtp4fpvl.css';
import '../../css/i/iazg7jbxc.css';
import '../../css/x/xbecp_bdv.css';
import '../../css/h/h-8noya1n.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="rdnh--bxy wm-shadow"/><path class="bdtp4fpvl"/><path class="iazg7jbxc"/><path class="xbecp_bdv"/><path class="h-8noya1n wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:plane"} {...others} />);
}

export default Component;
