import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xkmppwbxm.css';
import '../../css/i/i0okwyg0u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xkmppwbxm"/><path class="i0okwyg0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arrow-left-down"} {...others} />);
}

export default Component;
