import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/o/oljvrjb2y.css';
import '../../css/c/cugumcbbj.css';
import '../../css/q/qmsms8bjm.css';
import '../../css/o/o8a74nb6g.css';
import '../../css/s/s1y-dje8y.css';
import '../../css/m/mzdmjcc3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="oljvrjb2y"/><path class="cugumcbbj"/><path class="qmsms8bjm"/><path class="o8a74nb6g"/><path class="s1y-dje8y"/><path class="mzdmjcc3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:house-broken"} {...others} />);
}

export default Component;
