import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qj82bibet.css';
import '../../css/d/dhb362b4k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qj82bibet"/><path class="dhb362b4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chart-pie"} {...others} />);
}

export default Component;
