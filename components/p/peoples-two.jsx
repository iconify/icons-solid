import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/ar5q_mozu.css';
import '../../css/x/xlrrn_4li.css';
import '../../css/m/m3tvcud3p.css';
import '../../css/f/fwaij5b2p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ar5q_mozu"/><path class="xlrrn_4li"/><path class="m3tvcud3p"/><path class="fwaij5b2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:peoples-two"} {...others} />);
}

export default Component;
