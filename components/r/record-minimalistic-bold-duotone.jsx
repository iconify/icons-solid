import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d71s9bpxk.css';
import '../../css/i/i55b91czr.css';
import '../../css/f/fcxaqr_kh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d71s9bpxk"/><path class="i55b91czr"/><path class="fcxaqr_kh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
