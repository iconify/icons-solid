import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed22ltb_w.css';
import '../../css/t/ttw6-0qgy.css';
import '../../css/h/hrc58ibmo.css';
import '../../css/u/u8g_sbc5i.css';
import '../../css/d/dwonm-2uf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ed22ltb_w"/><path class="ttw6-0qgy"/><path class="hrc58ibmo"/><path class="u8g_sbc5i"/><path class="dwonm-2uf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:headset-one"} {...others} />);
}

export default Component;
