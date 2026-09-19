import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/h/hs15a5npu.css';
import '../../css/q/qnuwo-b8n.css';
import '../../css/f/fi_rz_b5r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="hs15a5npu"/><path class="qnuwo-b8n"/><path class="fi_rz_b5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sailboat"} {...others} />);
}

export default Component;
