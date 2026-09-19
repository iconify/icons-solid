import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/euce6ob-r.css';
import '../../css/p/pv2ur-63o.css';
import '../../css/u/uc3dxh5-y.css';
import '../../css/p/p01lrktmg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="euce6ob-r"/><path class="pv2ur-63o"/><circle class="uc3dxh5-y"/><path class="p01lrktmg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-staff"} {...others} />);
}

export default Component;
