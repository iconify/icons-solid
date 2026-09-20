import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/p/p0gwhczzy.css';
import '../../css/m/m4dgvdb7q.css';
import '../../css/a/aw66f39yt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="p0gwhczzy"/><path class="m4dgvdb7q"/><path class="aw66f39yt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:code-square-bold-duotone"} {...others} />);
}

export default Component;
