import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b8o14opiu.css';
import '../../css/z/zyt-jzbio.css';
import '../../css/p/p1uk0-n7t.css';
import '../../css/n/na1kc7b-i.css';
import '../../css/s/st4ev4vvx.css';
import '../../css/o/oeud0vblz.css';
import '../../css/p/p522uiboz.css';
import '../../css/y/y_zzz-xtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="b8o14opiu wm-shadow"/><path class="zyt-jzbio"/><path class="p1uk0-n7t"/><path class="na1kc7b-i"/><path class="st4ev4vvx"/><path class="oeud0vblz"/><path class="p522uiboz wm-shine"/><path class="wm-deco y_zzz-xtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:microscope"} {...others} />);
}

export default Component;
