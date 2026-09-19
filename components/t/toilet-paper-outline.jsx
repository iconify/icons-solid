import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nnp4uwb7x.css';
import '../../css/m/mtnsjzhxu.css';
import '../../css/k/kc7tjn8cw.css';
import '../../css/i/im8k1r0vl.css';
import '../../css/z/zqvw3abzp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nnp4uwb7x"/><path clip-rule="evenodd" class="mtnsjzhxu"/><path clip-rule="evenodd" class="kc7tjn8cw"/><path class="im8k1r0vl"/><path clip-rule="evenodd" class="zqvw3abzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:toilet-paper-outline"} {...others} />);
}

export default Component;
