import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t9aehzbab.css';
import '../../css/z/znwp9k_ns.css';
import '../../css/v/vb8zd0m5w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="t9aehzbab"/><path class="znwp9k_ns"/><path class="vb8zd0m5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hanger-two"} {...others} />);
}

export default Component;
