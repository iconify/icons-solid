import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qp4odab9v.css';
import '../../css/o/oue0f4u6n.css';
import '../../css/u/ul5k_53eg.css';
import '../../css/h/hll7wvmtx.css';
import '../../css/x/xkg1wybgt.css';
import '../../css/z/zfowcbctb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qp4odab9v wm-deco"/><path class="oue0f4u6n wm-deco"/><path class="ul5k_53eg wm-deco"/><path class="hll7wvmtx wm-k"/><path class="wm-a xkg1wybgt"/><path class="wm-k zfowcbctb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shovel-blueprint"} {...others} />);
}

export default Component;
