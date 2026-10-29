import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qdeokdb_z.css';
import '../../css/b/bmhca-ble.css';
import '../../css/t/t9u1-acqm.css';
import '../../css/v/vupexobtb.css';
import '../../css/p/p6z-vlbae.css';
import '../../css/n/n28vlsl5a.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qdeokdb_z wm-shadow"/><path class="bmhca-ble"/><path class="t9u1-acqm"/><path class="vupexobtb"/><path class="p6z-vlbae wm-shine"/><path class="n28vlsl5a wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:folder-plus"} {...others} />);
}

export default Component;
