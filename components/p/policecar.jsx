import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3adtlbjj.css';
import '../../css/s/s48ukszlc.css';
import '../../css/c/clqm64v4h.css';
import '../../css/i/i32fy0bfh.css';
import '../../css/v/viokhldur.css';
import '../../css/d/dd0p63b2k.css';
import '../../css/z/znqrj2bco.css';
import '../../css/m/mgkww9xrt.css';
import '../../css/z/zahbts0ul.css';
import '../../css/o/ocewo9bim.css';
import '../../css/s/sg9sjubou.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n3adtlbjj"/><path class="s48ukszlc"/><path class="clqm64v4h"/><path class="i32fy0bfh"/><path class="viokhldur"/><path class="dd0p63b2k"/><path class="znqrj2bco"/><path class="mgkww9xrt"/><path class="zahbts0ul"/><path class="ocewo9bim"/><path class="sg9sjubou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:policecar"} {...others} />);
}

export default Component;
