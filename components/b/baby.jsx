import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wc_hv_34n.css';
import '../../css/n/n9-b4x4dp.css';
import '../../css/e/emma5uf1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wc_hv_34n"/><path class="n9-b4x4dp"/><path class="emma5uf1l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baby"} {...others} />);
}

export default Component;
