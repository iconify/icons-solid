import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mm_aw0bii.css';
import '../../css/c/ce_gtac-e.css';
import '../../css/v/vc1hcbbrn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="mm_aw0bii"/><path class="ce_gtac-e"/><path class="vc1hcbbrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bridge-two"} {...others} />);
}

export default Component;
