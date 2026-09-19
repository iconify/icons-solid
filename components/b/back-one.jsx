import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vlcaug2yb.css';
import '../../css/k/ks_wjvb2m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="vlcaug2yb"/><path class="ks_wjvb2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:back-one"} {...others} />);
}

export default Component;
