import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nb_fhzbee.css';
import '../../css/d/dzupwjbqw.css';
import '../../css/q/qdis98vvf.css';
import '../../css/r/rfh_r883n.css';
import '../../css/c/ck5t-zuxf.css';
import '../../css/b/bco3ug89k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nb_fhzbee"/><path class="dzupwjbqw"/><path class="qdis98vvf"/><path class="rfh_r883n"/><path class="ck5t-zuxf"/><path class="bco3ug89k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:barcode-scan-linear"} {...others} />);
}

export default Component;
