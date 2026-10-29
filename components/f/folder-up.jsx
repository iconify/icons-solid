import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qdeokdb_z.css';
import '../../css/b/bmhca-ble.css';
import '../../css/q/qad11fbmm.css';
import '../../css/l/lsvszqbgm.css';
import '../../css/d/dx00qootx.css';
import '../../css/g/gvvatr54z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qdeokdb_z wm-shadow"/><path class="bmhca-ble"/><path class="qad11fbmm"/><path class="lsvszqbgm"/><path class="dx00qootx wm-shine"/><path class="gvvatr54z wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:folder-up"} {...others} />);
}

export default Component;
