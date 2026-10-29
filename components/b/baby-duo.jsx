import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kiwki_l1n.css';
import '../../css/x/x74obiblr.css';
import '../../css/e/emma5uf1l.css';
import '../../css/w/wc_hv_34n.css';
import '../../css/n/n9-b4x4dp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kiwki_l1n"/><path class="x74obiblr"/><path class="emma5uf1l wm-a"/><path class="wc_hv_34n"/><path class="n9-b4x4dp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:baby-duo"} {...others} />);
}

export default Component;
