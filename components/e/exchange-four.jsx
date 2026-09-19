import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/x/xzba8vb8f.css';
import '../../css/m/mz_ha2bnz.css';
import '../../css/o/o-1_wob-i.css';
import '../../css/t/t19r8acsn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="utf5_xbzs"/><path class="xzba8vb8f"/><path class="mz_ha2bnz"/><path class="o-1_wob-i"/><path class="t19r8acsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:exchange-four"} {...others} />);
}

export default Component;
