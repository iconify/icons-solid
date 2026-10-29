import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qdeokdb_z.css';
import '../../css/b/bmhca-ble.css';
import '../../css/u/ufnjyxb9x.css';
import '../../css/s/s65u6cx1v.css';
import '../../css/z/zhxyjhb8k.css';
import '../../css/r/r4b_rxdgm.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qdeokdb_z wm-shadow"/><path class="bmhca-ble"/><path class="ufnjyxb9x"/><path class="s65u6cx1v"/><path class="wm-shine zhxyjhb8k"/><path class="r4b_rxdgm wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:folder"} {...others} />);
}

export default Component;
