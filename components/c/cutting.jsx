import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dgl_i-bpw.css';
import '../../css/l/l_o6mzh0s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="dgl_i-bpw"/><path class="l_o6mzh0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cutting"} {...others} />);
}

export default Component;
