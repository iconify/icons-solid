import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/msu6hmnwe.css';
import '../../css/x/xhe52bciu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="msu6hmnwe"/><rect class="xhe52bciu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bottle-three"} {...others} />);
}

export default Component;
