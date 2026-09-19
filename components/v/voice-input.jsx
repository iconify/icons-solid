import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b8tqzsb4n.css';
import '../../css/e/e7p6txb7e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="b8tqzsb4n"/><path class="e7p6txb7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:voice-input"} {...others} />);
}

export default Component;
