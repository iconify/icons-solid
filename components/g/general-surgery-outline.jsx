import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a6pbxfl7e.css';
import '../../css/v/vg02ge-wk.css';
import '../../css/g/gdrvh_bcx.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a6pbxfl7e"/><path class="vg02ge-wk"/><path class="gdrvh_bcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:general-surgery-outline"} {...others} />);
}

export default Component;
