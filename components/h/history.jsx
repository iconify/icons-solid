import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tu7lv1bwo.css';
import '../../css/l/lwmxsqbjy.css';
import '../../css/h/hygxn_ioi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="tu7lv1bwo"/><path class="lwmxsqbjy"/><path class="hygxn_ioi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:history"} {...others} />);
}

export default Component;
