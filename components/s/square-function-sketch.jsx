import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qp_3d5bfd.css';
import '../../css/d/djut3k-ln.css';
import '../../css/k/kt7wgubkd.css';
import '../../css/g/gmw4v2fmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qp_3d5bfd"/><path class="djut3k-ln wm-a"/><path class="kt7wgubkd wm-k"/><path class="gmw4v2fmm wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-function-sketch"} {...others} />);
}

export default Component;
