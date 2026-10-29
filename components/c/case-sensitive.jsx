import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ect__eq5e.css';
import '../../css/t/tgw7o-wab.css';
import '../../css/n/n7-f7fcbu.css';
import '../../css/z/z0h2-ymbn.css';
import '../../css/m/mb-zz-kvi.css';
import '../../css/v/vq1u069yc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ect__eq5e wm-k"/><path class="tgw7o-wab wm-k"/><path class="n7-f7fcbu wm-k"/><path class="wm-a z0h2-ymbn"/><path class="mb-zz-kvi wm-a"/><path class="vq1u069yc wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:case-sensitive"} {...others} />);
}

export default Component;
