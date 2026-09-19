import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y93so2a_n.css';
import '../../css/k/kbwz4fv-v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="y93so2a_n"/><path class="kbwz4fv-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:market-analysis"} {...others} />);
}

export default Component;
