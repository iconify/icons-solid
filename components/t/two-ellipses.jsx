import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lmtdu5d2v.css';
import '../../css/v/vbbpwe1sm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="lmtdu5d2v"/><path class="vbbpwe1sm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:two-ellipses"} {...others} />);
}

export default Component;
