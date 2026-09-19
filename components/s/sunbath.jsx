import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/j/j3-q-wbad.css';
import '../../css/r/re3j4cclc.css';
import '../../css/s/sojrh7bfc.css';
import '../../css/d/dn6bfubvr.css';
import '../../css/a/as6bk-bnz.css';
import '../../css/g/guenu0b6y.css';
import '../../css/k/k85kkipwv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="j3-q-wbad"/><path class="re3j4cclc"/><path class="sojrh7bfc"/><path class="dn6bfubvr"/><path class="as6bk-bnz"/><path class="guenu0b6y"/><path class="k85kkipwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sunbath"} {...others} />);
}

export default Component;
