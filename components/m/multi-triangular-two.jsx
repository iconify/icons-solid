import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q-pan9bpu.css';
import '../../css/a/afa_ehb-q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="q-pan9bpu"/><path class="afa_ehb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:multi-triangular-two"} {...others} />);
}

export default Component;
