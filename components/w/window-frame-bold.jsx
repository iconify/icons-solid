import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p8vmmtt7r.css';
import '../../css/s/sy99kq9ei.css';
import '../../css/l/lu_-8lbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="p8vmmtt7r"/><path class="sy99kq9ei"/><path clip-rule="evenodd" class="lu_-8lbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:window-frame-bold"} {...others} />);
}

export default Component;
