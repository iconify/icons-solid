import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/h/hxcf9zb4q.css';
import '../../css/x/xm_53acnr.css';
import '../../css/a/aob06dbul.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="hxcf9zb4q"/><path class="xm_53acnr"/><rect class="aob06dbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:distribute-horizontal-spacing"} {...others} />);
}

export default Component;
