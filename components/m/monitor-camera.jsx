import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/h/hc8pcsbjm.css';
import '../../css/c/cmtd2kblp.css';
import '../../css/k/k9pcsy82o.css';
import '../../css/v/vdtfczwsp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="hc8pcsbjm"/><path class="cmtd2kblp"/><path clip-rule="evenodd" class="k9pcsy82o"/><path class="vdtfczwsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:monitor-camera"} {...others} />);
}

export default Component;
