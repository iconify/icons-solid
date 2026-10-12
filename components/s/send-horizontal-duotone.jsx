import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dy_c4nbmc.css';
import '../../css/e/elhn0g7ph.css';
import '../../css/f/f6qv5_awe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dy_c4nbmc"/><path class="elhn0g7ph"/><path class="f6qv5_awe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:send-horizontal-duotone"} {...others} />);
}

export default Component;
