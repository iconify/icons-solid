import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3n_sn-9k.css';
import '../../css/t/t9okf8slh.css';
import '../../css/c/cr_k1acgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r3n_sn-9k"/><path class="t9okf8slh"/><path clip-rule="evenodd" class="cr_k1acgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-circle-bold"} {...others} />);
}

export default Component;
