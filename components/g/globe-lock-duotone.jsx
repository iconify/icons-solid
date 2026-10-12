import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsm29rb0c.css';
import '../../css/i/im-u2lvxf.css';
import '../../css/e/eala76xrb.css';
import '../../css/v/vmh-g7inv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wsm29rb0c"/><path class="im-u2lvxf"/><path class="eala76xrb"/><path class="vmh-g7inv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:globe-lock-duotone"} {...others} />);
}

export default Component;
