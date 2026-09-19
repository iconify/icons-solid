import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/y/y5vgbcb_s.css';
import '../../css/b/bpmvr7beb.css';
import '../../css/p/pf5aoggpl.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="y5vgbcb_s"/><path class="bpmvr7beb"/><path class="pf5aoggpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ie-4x3"} {...others} />);
}

export default Component;
