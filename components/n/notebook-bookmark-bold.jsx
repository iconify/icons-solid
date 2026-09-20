import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbp0l5bpj.css';
import '../../css/l/le1o-ibmd.css';
import '../../css/r/rz20dxvoy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vbp0l5bpj"/><path clip-rule="evenodd" class="le1o-ibmd"/><path class="rz20dxvoy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notebook-bookmark-bold"} {...others} />);
}

export default Component;
