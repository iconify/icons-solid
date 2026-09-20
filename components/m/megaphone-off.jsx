import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njp_g6b2z.css';
import '../../css/h/hwz4pek1f.css';
import '../../css/o/ofdhnnb0y.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="njp_g6b2z"/><path clip-rule="evenodd" class="hwz4pek1f"/><path clip-rule="evenodd" class="ofdhnnb0y"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:megaphone-off"} {...others} />);
}

export default Component;
