import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdd323zfd.css';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yylgmr2nv.css';
import '../../css/l/lrieihs7k.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/q/q_tyy6c4k.css';
import '../../css/t/t1ue74bdx.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGnsEXLNwd" class="rdd323zfd"/></defs><g class="jx0p4fbya"><path class="yylgmr2nv"/><path class="lrieihs7k"/><use href="#SVGnsEXLNwd" class="c-zrgpb5l"/><path class="q_tyy6c4k"/><use href="#SVGnsEXLNwd" class="c-zrgpb5l"/><path class="t1ue74bdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-reinfected"} {...others} />);
}

export default Component;
