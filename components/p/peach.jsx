import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t6r4uxbtf.css';
import '../../css/l/ln2abc9qm.css';
import '../../css/h/hrp1nacdz.css';
import '../../css/q/qdl2kvbja.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="t6r4uxbtf"/><path class="ln2abc9qm"/><path class="hrp1nacdz"/><path class="qdl2kvbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:peach"} {...others} />);
}

export default Component;
