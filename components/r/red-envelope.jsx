import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t3bjmac6x.css';
import '../../css/u/u5bgjcbep.css';
import '../../css/v/vxalzhx-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="t3bjmac6x wm-k"/><path class="u5bgjcbep wm-s"/><path class="vxalzhx-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:red-envelope"} {...others} />);
}

export default Component;
