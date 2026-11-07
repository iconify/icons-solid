import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/u/u2bgohdzx.css';
import '../../css/c/cugumcbbj.css';
import '../../css/q/qmsms8bjm.css';
import '../../css/d/dzimeordr.css';
import '../../css/s/s1y-dje8y.css';
import '../../css/m/mzdmjcc3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="u2bgohdzx"/><path class="cugumcbbj"/><path class="qmsms8bjm"/><path class="dzimeordr"/><path class="s1y-dje8y"/><path class="mzdmjcc3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:house-broken"} {...others} />);
}

export default Component;
