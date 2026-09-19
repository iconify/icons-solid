import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rg_xgzhfl.css';
import '../../css/l/ll6bpkbte.css';
import '../../css/v/vmbylbb-t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rg_xgzhfl"/><path class="ll6bpkbte"/><path class="vmbylbb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:many-to-many"} {...others} />);
}

export default Component;
