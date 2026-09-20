import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhgz_wq-w.css';
import '../../css/q/q94oqubrs.css';
import '../../css/x/xz891ts8e.css';
import '../../css/f/fn_oazddk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xhgz_wq-w"/><path class="q94oqubrs"/><path class="xz891ts8e"/><path clip-rule="evenodd" class="fn_oazddk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-square-bold"} {...others} />);
}

export default Component;
