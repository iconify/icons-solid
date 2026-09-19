import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/l/l7lnidbov.css';
import '../../css/h/hpy61ibco.css';
import '../../css/h/hnruecbth.css';
import '../../css/e/elgvdnb-n.css';
import '../../css/u/u8k-z40_y.css';
import '../../css/k/kgwu1rb5g.css';
import '../../css/x/xjdefmbpu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="l7lnidbov"/><path class="hpy61ibco"/><path class="hnruecbth"/><path class="elgvdnb-n"/><path class="u8k-z40_y"/><rect class="kgwu1rb5g"/><rect class="xjdefmbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gate"} {...others} />);
}

export default Component;
