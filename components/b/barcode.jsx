import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgoo4bbkp.css';
import '../../css/l/lkrcecczm.css';
import '../../css/z/z_03rybdh.css';
import '../../css/l/l6bxjdb1y.css';
import '../../css/x/xwd0u6bje.css';
import '../../css/q/qh1n49a3s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="kgoo4bbkp"><rect class="lkrcecczm"/><rect class="z_03rybdh"/><rect class="l6bxjdb1y"/><rect class="xwd0u6bje"/><rect class="qh1n49a3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:barcode"} {...others} />);
}

export default Component;
