import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rqh08nmte.css';
import '../../css/x/x2e97n8nb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rqh08nmte"/><path class="x2e97n8nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:oval-love-two"} {...others} />);
}

export default Component;
