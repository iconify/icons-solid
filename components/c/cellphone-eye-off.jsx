import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/raphvibhn.css';
import '../../css/c/cjxzckb3x.css';
import '../../css/h/hgljvq_sx.css';
import '../../css/w/w1rmne3kr.css';
import '../../css/v/vve2dil0o.css';
import '../../css/g/gf77tvf2s.css';
import '../../css/a/a666lh9aj.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="raphvibhn"/><path clip-rule="evenodd" class="cjxzckb3x"/><path clip-rule="evenodd" class="hgljvq_sx"/><path clip-rule="evenodd" class="w1rmne3kr"/><path clip-rule="evenodd" class="vve2dil0o"/><path class="gf77tvf2s"/><path clip-rule="evenodd" class="a666lh9aj"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:cellphone-eye-off"} {...others} />);
}

export default Component;
