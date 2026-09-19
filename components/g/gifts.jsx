import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s120smbfq.css';
import '../../css/j/jmnhf-6jp.css';
import '../../css/t/tua_jlyvu.css';
import '../../css/n/ns_uig9dh.css';
import '../../css/u/ufuflmw1g.css';
import '../../css/k/kwzfc9gkv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s120smbfq"/><path class="jmnhf-6jp"/><path class="tua_jlyvu"/><path class="ns_uig9dh"/><path class="ufuflmw1g"/><path class="kwzfc9gkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:gifts"} {...others} />);
}

export default Component;
