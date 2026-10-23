import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpi-q2bht.css';
import '../../css/b/bk0dwpbms.css';
import '../../css/u/ue-rx-bbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vpi-q2bht"/><path class="bk0dwpbms"/><path class="ue-rx-bbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-user-duotone"} {...others} />);
}

export default Component;
