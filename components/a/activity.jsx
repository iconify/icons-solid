import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/g_6f24vpf.css';
import '../../css/m/mzn8nrb_f.css';
import '../../css/g/ggre-9uoz.css';
import '../../css/q/qu3y-leru.css';
import '../../css/z/zqmi4db4z.css';
import '../../css/z/zotp8-bki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="g_6f24vpf wm-shadow"/><path class="mzn8nrb_f"/><path class="ggre-9uoz"/><path class="qu3y-leru"/><path class="wm-shine zqmi4db4z"/><path class="wm-deco zotp8-bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:activity"} {...others} />);
}

export default Component;
