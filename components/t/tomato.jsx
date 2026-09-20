import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfrchkbrg.css';
import '../../css/t/tlsclv64c.css';
import '../../css/p/p_tmywbwe.css';
import '../../css/e/e-_g3_llx.css';
import '../../css/l/lb80qlbob.css';
import '../../css/n/nvr1rrali.css';
import '../../css/p/pu864wbja.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="rfrchkbrg"><ellipse class="tlsclv64c"/><path class="p_tmywbwe"/><path class="e-_g3_llx"/></g><g class="lb80qlbob"><path class="nvr1rrali"/><path class="pu864wbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tomato"} {...others} />);
}

export default Component;
