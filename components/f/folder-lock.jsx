import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qdeokdb_z.css';
import '../../css/b/bmhca-ble.css';
import '../../css/s/s1hlc7ztb.css';
import '../../css/i/i60oyqb4o.css';
import '../../css/m/mk0xnq_3y.css';
import '../../css/k/kbgozsbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qdeokdb_z wm-shadow"/><path class="bmhca-ble"/><path class="s1hlc7ztb"/><path class="i60oyqb4o"/><path class="mk0xnq_3y wm-shine"/><path class="kbgozsbzo wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:folder-lock"} {...others} />);
}

export default Component;
