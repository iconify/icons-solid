import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qdeokdb_z.css';
import '../../css/b/bmhca-ble.css';
import '../../css/u/ufnjyxb9x.css';
import '../../css/m/mrd-upb7r.css';
import '../../css/l/l8wdmt51o.css';
import '../../css/o/osdvpkb0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qdeokdb_z wm-shadow"/><path class="bmhca-ble"/><path class="ufnjyxb9x"/><path class="mrd-upb7r"/><path class="l8wdmt51o wm-shine"/><path class="osdvpkb0b wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:folder-down"} {...others} />);
}

export default Component;
