import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/huvq51b5k.css';
import '../../css/v/v2k_f9asu.css';
import '../../css/v/vw1n_l36v.css';
import '../../css/k/k1l3ssb0v.css';
import '../../css/x/x19roperr.css';
import '../../css/k/k9qoidrna.css';
import '../../css/n/nb9qzbchy.css';
import '../../css/m/m74tf6ttw.css';
import '../../css/y/yrfi8l-ww.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="d2kvgvbvc"><g class="huvq51b5k"><path class="v2k_f9asu"/><path class="vw1n_l36v"/></g><path class="k1l3ssb0v"/><path class="x19roperr"/><path class="k9qoidrna"/><path class="nb9qzbchy"/><path class="m74tf6ttw"/></g><path class="yrfi8l-ww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:apple"} {...others} />);
}

export default Component;
