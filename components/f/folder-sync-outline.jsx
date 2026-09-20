import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z40zw9udh.css';
import '../../css/q/qn8ujjbrp.css';
import '../../css/w/w_8fmvbbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z40zw9udh"/><path class="qn8ujjbrp"/><path clip-rule="evenodd" class="w_8fmvbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-sync-outline"} {...others} />);
}

export default Component;
