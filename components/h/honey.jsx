import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/t/t0_fxfgza.css';
import '../../css/n/n5pa40b0a.css';
import '../../css/c/cpnv_xbzs.css';
import '../../css/x/xd6v6ebqj.css';
import '../../css/o/okm97z7eb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="t0_fxfgza"/><path class="n5pa40b0a"/><path class="cpnv_xbzs"/><path class="xd6v6ebqj"/><path class="okm97z7eb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:honey"} {...others} />);
}

export default Component;
