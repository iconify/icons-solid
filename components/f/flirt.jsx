import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wbyslvbpq.css';
import '../../css/k/kwdqibchg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="wbyslvbpq"/><path class="kwdqibchg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:flirt"} {...others} />);
}

export default Component;
