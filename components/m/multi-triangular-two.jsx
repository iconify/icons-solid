import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q-pan9bpu.css';
import '../../css/j/jcwsvbb-t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="q-pan9bpu"/><path class="jcwsvbb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:multi-triangular-two"} {...others} />);
}

export default Component;
