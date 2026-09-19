import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mvvao8zsr.css';
import '../../css/k/ks951rb4s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mvvao8zsr"/><path class="ks951rb4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:recycling"} {...others} />);
}

export default Component;
