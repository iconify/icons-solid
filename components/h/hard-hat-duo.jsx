import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k75tc6b0u.css';
import '../../css/u/uas-gvbrx.css';
import '../../css/m/mce9chbnc.css';
import '../../css/h/hcaie_vox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k75tc6b0u"/><path class="uas-gvbrx wm-a"/><path class="mce9chbnc wm-a"/><path class="hcaie_vox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hard-hat-duo"} {...others} />);
}

export default Component;
