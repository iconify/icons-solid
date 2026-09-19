import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dx6c4tn2r.css';
import '../../css/r/r3z32eb1y.css';
import '../../css/j/j1xjnqltu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="dx6c4tn2r"/><circle class="r3z32eb1y"/><path class="j1xjnqltu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:big-clock"} {...others} />);
}

export default Component;
