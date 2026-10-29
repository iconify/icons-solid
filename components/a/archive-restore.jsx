import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k_lneb11t.css';
import '../../css/k/kfbj6uzww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k_lneb11t"/><path class="kfbj6uzww wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:archive-restore"} {...others} />);
}

export default Component;
