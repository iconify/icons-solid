import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fei-hofsh.css';
import '../../css/p/pe0smabhf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="fei-hofsh"/><path class="pe0smabhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:six-points"} {...others} />);
}

export default Component;
