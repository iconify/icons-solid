import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e2px_3bsw.css';
import '../../css/y/yd1xpjgcz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e2px_3bsw"/><path class="yd1xpjgcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:doc-success"} {...others} />);
}

export default Component;
