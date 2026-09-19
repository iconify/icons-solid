import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/euce6ob-r.css';
import '../../css/p/pv2ur-63o.css';
import '../../css/z/z6ptcgg0m.css';
import '../../css/d/d1udp9b5t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="euce6ob-r"/><path class="pv2ur-63o"/><path class="z6ptcgg0m"/><path class="d1udp9b5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-withdrawal"} {...others} />);
}

export default Component;
